import { useEffect, useRef, useState } from "react";

function Modal() {
  const [isVisible, setIsVisible] = useState(false);
  const modalRef = useRef(null);
  const openModal = () => {
    setIsVisible(true);
  };

  const closeModal = () => {
    if (modalRef.current) {
      modalRef.current.classList.add("closing");
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    }
  };
  useEffect(() => {
    if (isVisible && modalRef.current) {
      modalRef.current.classList.add("opening");
    }
  }, [isVisible]);

  return (
    <>
      <button onClick={openModal}>open modal</button>
      {isVisible && (
        <div className="modal-overlay">
          <div className="modal" ref={modalRef}>
            <h2>Modal window</h2>
            <p>Lorem ipsum modal</p>
            <button onClick={closeModal}>close modal</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Modal;
