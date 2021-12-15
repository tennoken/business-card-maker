import React, { useEffect, useState } from 'react';
import styles from './maker.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { useHistory } from 'react-router';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState({
    1: {
      id: '1',
      name: 'Kzero1',
      company: 'Google',
      email: 'kzero@naver.com',
      title: 'Software Engineer',
      theme: 'light',
      message: 'Good!',
      fileName: 'kzero',
      fileURL: null,
    },
    2: {
      id: '2',
      name: 'Kzero2',
      company: 'Google',
      email: 'kzero@naver.com',
      title: 'Software Engineer',
      theme: 'dark',
      message: 'Good!',
      fileName: 'kzero',
      fileURL: 'kzero.png',
    },
    3: {
      id: '3',
      name: 'Kzero3',
      company: 'Google',
      email: 'kzero@naver.com',
      title: 'Software Engineer',
      theme: 'colorful',
      message: 'Good!',
      fileName: 'kzero',
      fileURL: null,
    },
  });

  const history = useHistory();

  const onLogout = () => {
    authService.logout();
  };

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      updated[card.id] = card;
      return updated;
    });
  };

  const deleteCard = (card) => {
    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  useEffect(() => {
    authService.onAuthStateChange((user) => {
      if (!user) {
        history.push('/');
      }
    });
  });

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          cards={cards}
          createOrUpdateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Maker;
