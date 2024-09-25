import { useState, useEffect } from 'react';
import Modal from '@mui/joy/Modal';

const MainModal = ({ modalIsOpen, closeModal, children }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [modalIsOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal]);

  return (
    <Modal
      open={open}
      onClose={closeModal}
      sx={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <>{children}</>
    </Modal>
  );
};

export default MainModal;
