import React, { useState } from 'react';

const DynamicBackground = () => {
  const [inputValue, setInputValue] = useState(''); // For input value
  const [bgColor, setBgColor] = useState('white');  // For background color

  // Function to handle input changes and update background color
  const handleInputChange = (e) => {
    const value = e.target.value.toLowerCase(); // Convert input to lowercase
    setInputValue(value); // Update the input value

    // Change background color based on specific input values
    if (value === 'cool') {
      setBgColor('blue');
    } else if (value === 'react') {
      setBgColor('purple');
    } else {
      setBgColor('white'); // Default background color
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type 'cool' or 'react'"
        className="p-2 border border-gray-300 rounded"
      />
      <div
        className="mt-4 p-4"
        style={{ backgroundColor: bgColor }}
      >
        The background color changes based on input.
      </div>
    </div>
  );
};

export default DynamicBackground;
