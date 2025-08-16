import { useState } from "react";
import styles from "./LuckyNumber.module.css";

export function LuckyNumber() {
  const [luckyNumber, setLuckyNumber] = useState(0);
  const [numbers, setNumbers] = useState([]);
  const [showRepeatMsg, setShowRepeatMsg] = useState(false);

  function handleClick() {
    const newNumber = Math.floor(Math.random() * 40) + 1;
    setLuckyNumber(newNumber);

    const alreadyExists = numbers.includes(newNumber);

    if (alreadyExists) {
      setShowRepeatMsg(true);
      setTimeout(() => setShowRepeatMsg(false), 2000);
      return;
    }

    setNumbers((prev) => [...prev, newNumber]);
    setShowRepeatMsg(false);
  }

  return (
    <div className={styles.container}>
      {luckyNumber === 0 ? (
        <h1>Lucky Number 🎲</h1>
      ) : (
        <h1>Lucky Number = {luckyNumber}</h1>
      )}
      <button className={styles.button} onClick={handleClick}>
        I'm Feeling Lucky Today!
      </button>
      <div className={styles.number}>
        {numbers.length > 0 && (
          <span>
            Números sorteados: {numbers.join(", ")}
          </span>
        )}
      </div>
      {showRepeatMsg && (
        <div className={styles.uniqueMsg}>
          Este número já saiu!
        </div>
      )}
    </div>
  );
}
