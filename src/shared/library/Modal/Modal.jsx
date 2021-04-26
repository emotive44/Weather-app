import React, { useState, useEffect } from 'react';
import './Modal.scss';


const Modal = ({
  main,
  title,
  footer,
  className,
  closeModal,
}) => {
  const [modalClasses, setModalClasses] = useState(['modal']);

  useEffect(() => {
    setModalClasses(['modal', className]);
  }, [className]);

  return (
    <section className={modalClasses.join(' ')}>
      <header className='header'>
        <div className='header-wrapper'>
          <b>{title}</b>
        </div>
        <span onClick={closeModal}>
          <i className='far fa-times-circle' />
        </span>
      </header>

      <main className='main'> {main} </main>

      {footer && (
        <footer className='footer'> {footer} </footer>
      )}
    </section>
  );
}

export default Modal;
