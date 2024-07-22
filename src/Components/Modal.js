import React from "react";
import { useState } from "react";

const Modal = ({ show, children, id }) => {
  const [showModal, setShowModal] = useState(true);
  if (!show) return "";

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-md shadow-md w-1/3">
        <button
          className="right-0 top-2 absolute w-[70px] border border-black rounded-md ml-auto mr-5 hover:bg-red-400"
          onClick={() => {
            setShowModal(false);
          }}
        >
          Close
        </button>
      </div>
      {children}
    </div>
  );
};

export default Modal;
