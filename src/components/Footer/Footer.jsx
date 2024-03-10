import React, { useState, useEffect } from 'react';

const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);
  return (
    <footer className="bg-dark text-light py-3">
      <div className="container text-center">
        <p>&copy; {year} Minha Página Web</p>
      </div>
    </footer>
  );
};

export default Footer;