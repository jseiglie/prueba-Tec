// App.js
import "./App.css";
import { useState, useMemo } from "react";
import useLoader from "./hooks/useLoader";
import useModal from "./hooks/useModal";
import { Navigation } from "./components/navigation";
import { ModalItem } from "./components/modal";
import { useTranslation } from "react-i18next";
import { LangSelector } from "./services/langSelector";

function App() {
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedSubcategory, setSelectedSubcategory] = useState();
  const [selectedColor, setSelectedColor] = useState();
  const [selectedProduct, setSelectedProduct] = useState();
  const [filterOpt, setFilterOpt] = useState("no");
  const { t } = useTranslation();


  const { isOpen: modal, toggleModalInfo } = useModal();

  const { data: category, error: categoryError } = useLoader("category");
  const { data: subcategory, error: subcategoryError } = useLoader(
    "subcategory",
    selectedCategory ? selectedCategory.id : ""
  );
  const { data: color, error: colorError } = useLoader(
    "color",
    selectedSubcategory ? selectedSubcategory.id : ""
  );

  const productParams = useMemo(
    () => ({
      id_category: selectedCategory ? selectedCategory.id : "",
      id_subcategory: selectedSubcategory ? selectedSubcategory.id : "",
      id_color: selectedColor ? selectedColor.id : "",
    }),
    [selectedCategory, selectedSubcategory, selectedColor]
  );

  const { data: product, error: productError } = useLoader(
    "product",
    "",
    productParams
  );

  const filteredProduct = product
    ? [...product].sort((a, b) => {
        if (filterOpt === "asc") return a.price - b.price;
        if (filterOpt === "desc") return b.price - a.price;
        if (filterOpt === "rating") return b.average_rating - a.average_rating;
        return 0;
      })
    : [];

  const handleProductClick = (el) => {
    setSelectedProduct(el);
    toggleModalInfo(); // Use toggleModalInfo to show/hide the modal
  };

  return (
    <main className="App w-100 text-start container-fluid">
      {categoryError || subcategoryError || colorError || productError ? (
        <div>
          error:{" "}
          {categoryError || subcategoryError || colorError || productError}
        </div>
      ) : (
        ""
      )}
     <LangSelector/>
      {category && (<div className="d-flex align-items-center">
      <span>{t("Categoría")}:</span>
        <Navigation
          key="cat"
          category={category}
          setter={setSelectedCategory}
          selected={selectedCategory}
          />
          </div>
      )}
      {subcategory && (<div className="d-flex align-items-center">
        <span>{t("Sub-categoría")}:</span>
        <Navigation
          key="subcat"
          subcategory={subcategory}
          setter={setSelectedSubcategory}
          selected={selectedSubcategory}
        />
        </div>
      )}
      {color && (
        <div className="d-flex align-items-center">
      <span>{t("Color")}:</span>
        <Navigation
          key="col"
          color={color}
          setter={setSelectedColor}
          selected={selectedColor}
        />
        </div>
      )}

      <article className="container-fluid ">
        {product && (
          <div className="d-flex align-items-center justify-content-end my-3 ">
            <span className="mx-3">Filtrar: </span>
            <select
              className="form-select w-25"
              aria-label="Filter select"
              onChange={(e) => setFilterOpt(e.target.value)}
            >
              <option value="no">{t("Recomendación")}</option>
              <option value="asc">{t("Precio Ascendente")}</option>
              <option value="desc">{t("Precio Descendente")}</option>
              <option value="rating">{t("Valoración")}</option>
            </select>
          </div>
        )}

        <section className="product_wrapper row g-3 mx-auto my-4">
          {filteredProduct.map((el) => (
            <article
              className="product_holder card col-sm-6 col-md-4 col-lg-3 col-xl-2 mx-3 p-0"
              style={{ width: "12rem" }}
              key={el.id}
            >
              <figure className="product_img">
                <img src="" alt={el.name} />
                <figcaption>{t(el.name)}</figcaption>
              </figure>
              <p>{el.price}</p>
            
              <button
                className="btn btn-primary border-0"
                onClick={() => handleProductClick(el)}
              >
                {t('Ver')}
              </button>
            </article>
          ))}
          {modal && <ModalItem item={selectedProduct} close={toggleModalInfo} />}{" "}
 
        </section>
      </article>




   
    </main>
  );
}

export default App;
