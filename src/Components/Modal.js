import React from "react";
import { useState } from "react";

const Modal = ({ show, children, id, onClose }) => {
  const [showModal, setShowModal] = useState(true);
  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-md shadow-md w-1/3">
        <button
          className="absolute top-2 right-2 border border-black rounded-md px-3 py-1"
          onClick={onClose}
        >
          Close
        </button>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
