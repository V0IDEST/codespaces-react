import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router";
import { useState, useContext } from "react";
import { CartContext } from "../../service/CartContext";

export function Login() {
    const [form, setForm] = useState({ email: "", password: "" });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { validateUser } = useContext(CartContext);
    const navigate = useNavigate();

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
        setError(""); // Clear error on input change
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setLoading(true);
        // Simulate async validation
        setTimeout(() => {
            if (validateUser(form.email, form.password)) {
                setError("");
                navigate("/");
            } else {
                setError("E-mail ou senha inválidos!");
            }
            setLoading(false);
        }, 600);
    }

    return (
        <div className={styles.LoginContainer}>
            <h1>Login</h1>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="email">E-Mail:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className={styles.input}
                    value={form.email}
                    onChange={handleChange}
                    autoFocus
                    placeholder="Digite seu e-mail"
                />
                <label htmlFor="password">Senha:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    className={styles.input}
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Digite sua senha"
                />
                <button type="submit" disabled={loading}>
                    {loading ? "Entrando..." : "Login"}
                </button>
                {error && <p className={styles.error}>{error}</p>}
            </form>
            <div className={styles.signupContainer}>
                <span>Não tem uma conta?</span>
                <Link to="/signup" className={styles.signup}>Cadastre-se</Link>
            </div>
        </div>
    );
}