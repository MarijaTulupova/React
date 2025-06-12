import "./Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer-container">
      <p>{currentYear}</p>
    </div>
  );
};
