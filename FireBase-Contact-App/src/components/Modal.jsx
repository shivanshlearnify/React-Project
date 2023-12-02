import { createPortal } from "react-dom";
import { AiOutlineClose } from "react-icons/Ai";

const Modal = ({ onClose, isOpen, children }) => {
  return createPortal(
    <>
      {isOpen && (
        <>
          <div className="relative z-50 min-h-[200px] max-w-[80%] bg-white p-4 m-auto ">
            <div className="flex justify-end">
              <AiOutlineClose onClick={onClose} className="text-2xl" />
            </div>
            {children}
          </div>
          <div onClick={onClose} className=" backdrop-blur h-screen z-40 w-screen absolute top-0 " />
        </>
      )}
    </>,document.getElementById("modal-root"));
};

export default Modal;
