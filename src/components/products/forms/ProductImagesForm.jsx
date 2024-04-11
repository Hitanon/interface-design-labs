import { useContext } from "react";
import { observer } from "mobx-react-lite";
import { useDropzone } from "react-dropzone";

import { Context } from "../../..";


const ProductImagesForm = observer(() => {
  const { editProduct } = useContext(Context);

  const onDrop = (acceptedFiles) => {
    editProduct.setImages(acceptedFiles);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <>
      <label>Изображения продукта:</label>
      <div {...getRootProps()} className="product-image">
        <input {...getInputProps()} />
        <p>Перетащите файлы сюда или нажмите для выбора файлов</p>
      </div>
      {editProduct.images.length > 0 && (
        <div>
          <p className="images-list-title">Выбранные изображения:</p>
          <ul className="images-list">
            {editProduct.images.map((file, index) => (
              <li key={index}>
                <img
                  className="image-item"
                  src={URL.createObjectURL(file)}
                  alt={`Изображение ${index}`}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
});

export default ProductImagesForm;
