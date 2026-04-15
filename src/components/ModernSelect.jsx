import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

const ModernSelect = ({
  options = [],
  value,
  onChange,
  placeholder = "Select option",
  required = false,
  className = "",
  disabled = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  const filteredOptions = options.filter((option) => {
    const text =
      typeof option === "string" ? option : option.label || option.name || "";

    return text.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const selectedOption = options.find(
    (option) => (option.value || option) === value,
  );

  const displayText = selectedOption
    ? selectedOption.label || selectedOption.name || selectedOption
    : placeholder;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setSearchTerm("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    const optionValue = option.value || option;
    onChange(optionValue);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <div
        className={`w-full px-4 py-3 rounded-md border outline-none cursor-pointer text-base flex items-center justify-between transition-all bg-white border-slate-200 hover:border-primary focus:border-primary ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        } ${isOpen ? "border-primary ring-2 ring-primary/10" : ""} ${
          value ? "text-slate-700" : "text-slate-400"
        }`}
        onClick={() => !disabled && setIsOpen(!isOpen)}
      >
        <span className="truncate">{displayText}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 text-slate-400 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 rounded-md border border-slate-200 shadow-lg max-h-60 overflow-hidden bg-white">
          {options.length > 5 && (
            <div className="p-2 border-b border-slate-100">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-3 py-1 text-sm rounded border border-slate-200 outline-none bg-slate-50 text-slate-700 focus:border-primary focus:bg-white"
                autoFocus
              />
            </div>
          )}

          <div className="max-h-48 overflow-y-auto">
            {filteredOptions.length === 0 ? (
              <div className="px-4 py-3 text-sm text-center text-slate-400">
                No options found
              </div>
            ) : (
              filteredOptions.map((option, index) => {
                const optionValue = option.value || option;
                const optionLabel = option.label || option.name || option;
                const isSelected = optionValue === value;

                return (
                  <div
                    key={index}
                    className={`px-4 py-2.5 cursor-pointer text-base flex items-center justify-between transition-colors hover:bg-slate-50 ${
                      isSelected
                        ? "bg-primary/10 text-primary"
                        : "text-slate-700"
                    }`}
                    onClick={() => handleSelect(option)}
                  >
                    <span className="truncate">{optionLabel}</span>
                    {isSelected && <Check size={16} className="text-primary" />}
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModernSelect;
