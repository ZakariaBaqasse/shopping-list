import classes from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={`${classes.footer}`}>
      <p>Pour les passionnes des plantes 🌵🌿</p>
      <p>Laissez-nous votre email:</p>
      <input type="email" placeholder="Entrez votre email" />
    </footer>
  );
};

export default Footer;
