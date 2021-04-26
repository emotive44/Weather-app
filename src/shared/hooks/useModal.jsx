import { useState } from 'react';

const useModal = () => {
  const [toggleModal, setToggleModal] = useState('close');

  const showModal = () => setToggleModal('show');

  const closeModal = () => setToggleModal('close');

  return { toggleModal, showModal, closeModal };
};

export default useModal;
