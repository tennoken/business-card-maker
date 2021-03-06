import React from 'react';
import styles from './card_edit_form.module.css';
import Button from '../button/button';

const CardEditForm = ({ FileInput, card, createOrUpdateCard, deleteCard }) => {
  const { name, company, email, title, theme, fileName, message } = card;

  const onSubmit = () => {
    deleteCard(card);
  };

  const onFileChange = (file) => {
    console.log(file);
    createOrUpdateCard({
      ...card,
      fileName: file.fileName,
      fileURL: file.fileUrl,
    });
  };

  const onChange = (event) => {
    console.log(event);
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    createOrUpdateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="title"
        value={title}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="message"
        value={message}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>
      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
};

export default CardEditForm;
