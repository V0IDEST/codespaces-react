import styles from "./Estoque.module.css";
import { useContext, useState } from "react";
import { CartContext } from "../../service/CartContext";

export function Estoque() {
  const { products, addProduct, removeProduct } = useContext(CartContext);
  const [form, setForm] = useState({
    title: "",
    price: "",
    description: "",
    thumbnail: ""
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function handleAdd(e) {
    e.preventDefault();
    if (!form.title || !form.price) return;
    addProduct({
      id: Date.now(),
      title: form.title,
      price: Number(form.price),
      description: form.description,
      thumbnail: form.thumbnail || "https://via.placeholder.com/150"
    });
    setForm({ title: "", price: "", description: "", thumbnail: "" });
  }

  return (
    <div className={styles.container}>
      <h1>Controle de Produtos</h1>
      <div className={styles.main}>
        <form onSubmit={handleAdd} className={styles.form}>
          <h2>Adicionar Produto</h2>
          <div className={styles.inputs}>
            <input
              name="title"
              type="text"
              placeholder="Nome"
              value={form.title}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <input
              name="price"
              type="number"
              placeholder="Preço"
              value={form.price}
              onChange={handleChange}
              className={styles.input}
              required
              min="0"
            />
            <input
              name="description"
              type="text"
              placeholder="Descrição"
              value={form.description}
              onChange={handleChange}
              className={styles.input}
            />
            <input
              name="thumbnail"
              type="text"
              placeholder="URL da imagem"
              value={form.thumbnail}
              onChange={handleChange}
              className={styles.input}
            />
          </div>
          <button type="submit" className={styles.button}>Adicionar Produto</button>
        </form>
        <div className={styles.produtos}>
          <h2>Produtos Existentes</h2>
          {products.length === 0 ? (
            <p className={styles.empty}>Nenhum produto cadastrado.</p>
          ) : (
            <ul className={styles.lista}>
              {products.map((p) => (
                <li key={p.id} className={styles.item}>
                  <img src={p.thumbnail} alt={p.title} className={styles.img} />
                  <div className={styles.info}>
                    <span className={styles.title}>{p.title}</span>
                    <span className={styles.price}>R$ {p.price.toFixed(2)}</span>
                    <p className={styles.desc}>{p.description}</p>
                  </div>
                  <button
                    className={styles.remove}
                    onClick={() => removeProduct(p.id)}
                    title={`Remover ${p.title}`}
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}