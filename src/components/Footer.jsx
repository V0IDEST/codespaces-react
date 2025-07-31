import React from "react";
import { Heart, Github, Linkedin } from "lucide-react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h3>ShopFácil</h3>
          <p>Sua loja online de confiança com os melhores produtos e preços.</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Links Rápidos</h4>
          <ul>
            <li><a href="/">Produtos</a></li>
            <li><a href="/categorias">Categorias</a></li>
            <li><a href="/cart">Carrinho</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Contato</h4>
          <p>Email: contato@shopfacil.com</p>
          <p>Telefone: (11) 99999-9999</p>
        </div>

        <div className={styles.footerSection}>
          <h4>Redes Sociais</h4>
          <div className={styles.socialLinks}>
            <a href="#" aria-label="Github">
              <Github size={20} />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>
          Feito com <Heart size={16} className={styles.heartIcon} /> para demonstração
        </p>
        <p>&copy; 2025 ShopFácil. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;