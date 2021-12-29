import React from 'react';
import styles from './image_file_input.module.css';
import { useRef } from 'react/cjs/react.development';

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();

  const onButtonClick = (event) => {
    event.preventDefault();
    inputRef.current.click();
  };

  const onChange = async (event) => {
    event.preventDefault();
    console.log(event.target.files[0]);
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.input}
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || 'No file'}
      </button>
    </div>
  );
};
/// cloudinary를 사용해서 이미지 업로드 -> component가 아닌 class로 만들어서 해보자

export default ImageFileInput;
