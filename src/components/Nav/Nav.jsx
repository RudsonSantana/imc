import React from 'react';

const Nav = () => {
  return (
    <nav class="navbar bg-primary" data-bs-theme="dark">
      <form class="container-fluid justify-content-center">
        <button class="btn btn-outline-light me-4" type="button">Inicio</button>
        <button class="btn btn-outline-light me-4" type="button">Sobre</button>
        <button class="btn btn-outline-light me-4" type="button">Contato</button>
      </form>
    </nav>
  );
};

export default Nav;
