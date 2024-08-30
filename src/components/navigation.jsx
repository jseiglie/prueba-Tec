import React from "react";
import { useTranslation } from 'react-i18next';


export const Navigation = (props) => {
  const { t } = useTranslation();
  //{category, selectCategory, color, selectColor, subcategory, selectSubcategory, product, selectProduct}
  //console.log(category, selectCategory, color, selectColor, subcategory, selectSubcategory, product, selectProduct);

  // console.log(props);

  return (
    <div className="container d-flex">
      {Object.keys(props).map((arr) =>
        Array.isArray(props[arr])
          ? props[arr].map((el) => <div key={el.id} className="mx-1">
            <button  onClick={()=>props.setter(el)} className={`${props.selected?.name===el.name? 'active':''} btn `}>

            {t(el.name)}
            </button>
            </div>)
          : ""
      )}
    </div>
  );
};
