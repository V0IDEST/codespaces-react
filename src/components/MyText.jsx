import styles from "./MyText.module.css";

export function MyText({ text }) {
  return (
    <div className={styles.container}>
      <div className={styles.div}>
        <h1 className={styles.title}>Meu primeiro REACT app</h1>
        <p className={styles.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
          consequuntur nam explicabo expedita sequi fugit officia dolor rerum
          enim aspernatur sapiente doloribus numquam dolorum laudantium, saepe
          eos? Laboriosam, nobis magnam?
        </p>
      </div>
    </div>
  );
}
