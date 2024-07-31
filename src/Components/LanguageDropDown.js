import React from "react";
import Dropdown from "./DropDown";
import LanguageSVG from "../Svgs/LanguageSVG";
import { useTranslation } from "../context/LanguageProvider";

const LanguageDropDown = () => {
  const { language, setLanguage } = useTranslation();
  const options = [
    { value: "EN", label: "English" },
    { value: "AR", label: "Arabic" },
  ];

  const handleSelect = (option) => {
    if (option.value == "EN") {
      setLanguage("EN");
    } else {
      setLanguage("AR");
    }
  };
  return (
    <div className="absolute  right-0">
      <Dropdown
        SVG={LanguageSVG}
        options={options}
        onSelect={handleSelect}
        placeholder={language == "AR" ? "Arabic" : "English"}
      />
    </div>
  );
};

export default LanguageDropDown;
