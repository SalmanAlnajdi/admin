import React, { useState } from "react";

const Dropdown = ({ options, onSelect, placeholder, SVG }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left  ">
      <div>
        <button
          type="button"
          className="inline-flex items-center justify-between w-[80px] lg:w-[150px]  shadow-sm px-4 py-2  text-sm font-medium text-white hover:bg-[#3f5178] focus:bg-[#505289] focus:outline-none bg-[#2E4067] rounded-[12px]"
          onClick={handleToggle}
        >
          <div className="hidden lg:block">{SVG && <SVG />}</div>
          {selectedOption ? selectedOption.label : placeholder}
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-[150px] rounded-md shadow-lg bg-[#505289] ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-white hover:bg-[#3f5178] w-full text-left"
                role="menuitem"
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
