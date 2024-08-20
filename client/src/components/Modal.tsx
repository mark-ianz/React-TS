type ModalProps = {
  children: JSX.Element;
  isOpen: boolean;
  closeModal: () => void;
};

const Modal = ({ children, isOpen, closeModal }: ModalProps) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-20 flex items-center justify-center ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div onClick={closeModal} className="fixed inset-0"></div>
      <div className="z-10">{children}</div>
    </div>
  );
};

export default Modal;
