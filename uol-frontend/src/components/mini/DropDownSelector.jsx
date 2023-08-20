/* eslint-disable react/prop-types */
import { useState } from 'react';

const DropdownSelect = ({ props }) => {
  const { clientInfo, setClientInfo, setInputAlert, inputAlert } = props;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options = [
    'Ativo',
    'Inativo',
    'Aguardando ativação',
    'Desativado'
  ];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionSelect = (option) => {
    setClientInfo({ ...clientInfo, status: option });
    setIsDropdownOpen(false);
    setInputAlert({ ...inputAlert, status: false });
  };

  return (
    <div className="relative inline-block w-62 text-left">
      <div>
        <button
          type="button"
          className="flex justify-between items-center px-4 w-72 border rounded-md border-[#9a9a9a]'} text-[#9a9a9a] text-lg px-5 rounded-md w-[250px] h-[50px] flex items-center relative focus:outline-none focus:ring ring-stone-400"
          onClick={toggleDropdown}
        >
          <span className='text-[#000000]'>{clientInfo.status || <span className='text-[#9a9a9a]'>Status</span>}</span>
          <span
            className={`ml-2 transform transition-transform ${isDropdownOpen ? 'rotate-90' : 'rotate-0'
              }`}
          >
            &#9660;
          </span>
        </button>
      </div>
      {isDropdownOpen && (
        <div
          className="absolute mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                className="block px-4 py-2 text-sm text-gray-700 w-72 text-left hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                onClick={() => handleOptionSelect(option)}
              >
                <p className='text-[#000000]'>{option}</p>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};


export default DropdownSelect;
