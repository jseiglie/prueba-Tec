import { useTranslation } from "react-i18next";


export const ModalItem = ({ item, close }) => {
  const { t } = useTranslation();
  if (!item) return null;

  return (
    <div className="modal-wrapper m-0" onClick={close}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span role="button" onClick={close} className="modal-close-icon">
            ×
          </span>
        </div>
        <div className="modal-body d-flex justify-content-between text-start">
          <figure className="product_img">
            <img src="" alt={item.name} />
            <figcaption>{t(item.name)}</figcaption>
          </figure>
          <div className="d-flex flex-column">
            <h5>{item.name}</h5>
            <p>{t('Precio')}: {item.price}</p>
            <p>Stock: {item.stock_quantity}</p>
            <p>
              {item.is_free_shipping ? t("Envío gratuito") : ""}
            </p>
          </div>
        </div>
          <button onClick={close} className="btn btn-secondary mx-auto">{t('Cerrar')}</button>
      </div>
    </div>
  );
};
