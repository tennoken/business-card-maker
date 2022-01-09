import { getDatabase, off, onValue, ref, remove, set } from 'firebase/database';

class CardRepository {
  syncCard(userId, onUpdate) {
    const db = getDatabase();
    const SyncRef = ref(db, `${userId}/cards`);
    onValue(SyncRef, (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => off();
  }

  saveCard(userId, card) {
    const db = getDatabase();
    set(ref(db, `${userId}/cards/${card.id}`), {
      ...card,
    });
  }

  removeCard(userId, card) {
    const db = getDatabase();
    remove(ref(db, `${userId}/cards/${card.id}`));
  }
}

export default CardRepository;
