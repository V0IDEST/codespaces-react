import { useState } from 'react';
import styles from './MyGrid.module.css';
import { CircularProgress } from '@mui/material';

export function MyGrid() {
    var category = 'furniture';
    var limit = 12;
    var apiurl = 
    `https://dummyjson.com/products/category/${category}?limite=${limit}&select=id,thumbnail,title,description`;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    return (
        <div className={styles.container}>
            <h1>TRJ Megastore</h1>
            {products.map((product) => (
                <div key={product.id} className={styles.product}>
                    <img src={product.thumbnail} alt={product.title} className={styles.thumbnail} />
                    <h2 className={styles.title}>{product.title}</h2>
                    <p className={styles.description}>{product.description}</p>
                    <p className={styles.price}>${product.price}</p>
                </div>
            ))}
            {loading && <CircularProgress />}
            {error && <p className={styles.error}>Error: {error.message}</p>}
            {!loading && !error && products.length === 0 && <p className={styles.empty}>No products found.</p>}
            <button onClick={() => {
                setLoading(true);
                fetch(apiurl)
                    .then((response) => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then((data) => {
                        setProducts(data.products);
                        setLoading(false);
                    })
                    .catch((error) => {
                        setError(error);
                        setLoading(false);
                    });
            }}/>
        </div>
    );
}