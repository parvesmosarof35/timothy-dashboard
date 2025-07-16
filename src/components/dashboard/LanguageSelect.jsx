import { useState } from "react";

const LanguageSelect = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  const showGoogleTranslateElement = (show) => {
    const element = document.getElementById("google_translate_element");
    if (element) {
      element.style.display = show ? "none" : "none";
    }
  };

  const handleChange = (e) => {
    const lang = e.target.value;
    setSelectedLang(lang);

    // Toggle visibility of Google Translate element
    showGoogleTranslateElement(true);

    // Hide it again after 2 seconds
    setTimeout(() => showGoogleTranslateElement(false), 2000);
  };

  return (
    <div style={{ }}>
      <label className="block text-sm font-medium text-darkGray mb-1">
        Language
      </label>
      <select
        value={selectedLang}
        onChange={handleChange}
        className="w-full px-4 py-2 border text-brandGray rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="en">English (Default)</option>
        <option value="es">Español</option>
        <option value="ar">العربية</option>
        <option value="pt">Português</option>
        <option value="pt">French</option>
      </select>
    </div>
  );
};

export default LanguageSelect;
