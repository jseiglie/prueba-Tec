import { useState, useEffect } from "react";

const useLoader = (resourceType, id = "", additionalParams = {}) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  // Function to construct API endpoint based on resource type and id
  const buildEndpoint = (resourceType, id) => {
    const endpoints = {
      category: "/api/v1/recommender/category",
      subcategory: `/api/v1/recommender/category/${id}/subcategory`,
      color: `/api/v1/recommender/subcategory/${id}/color`,
      product: "/api/v1/recommender/product",
    };
    return endpoints[resourceType];
  };

  useEffect(() => {
    if (!resourceType) return;

    if ((resourceType === "subcategory" || resourceType === "color") && !id)
      return;

    if (
      resourceType === "product" &&
      (!additionalParams.id_category ||
        !additionalParams.id_subcategory ||
        !additionalParams.id_color)
    )
      return;

    const loader = async () => {
      const endpoint = buildEndpoint(resourceType, id);
      const queryString = new URLSearchParams(additionalParams).toString();
      const url = `${process.env.REACT_APP_ENDPOINT}${endpoint}${
        queryString ? "?" + queryString : ""
      }`;

      try {
        const resp = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "X-API-Key": process.env.REACT_APP_API_KEY,
          },
        });

        if (!resp.ok) {
          throw new Error("Error loading " + resourceType);
        }

        const result = await resp.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    loader();
    // eslint-disable-next-line
  }, [
    resourceType,
    id,
    // eslint-disable-next-line
    JSON.stringify(additionalParams), // Convert additionalParams to string for comparison
  ]);

  return { data, error };
};

export default useLoader;
