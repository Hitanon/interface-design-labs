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
      <div>
        <label>Изображения продукта:</label>
        <div {...getRootProps()} style={{ border: "1px dashed #ccc", padding: "20px", marginTop: "10px" }}>
          <input {...getInputProps()} />
          <p>Перетащите файлы сюда или нажмите для выбора файлов.</p>
        </div>
        <div>
          {editProduct.images.length > 0 && (
            <div>
              <h4>Выбранные изображения:</h4>
              <ul>
                {editProduct.images.map((file, index) => (
                  <li key={index}>
                    <img src={URL.createObjectURL(file)} alt={`Изображение ${index}`} style={{ maxWidth: '200px', maxHeight: '200px', marginBottom: '10px' }} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
});

export default ProductImagesForm;
