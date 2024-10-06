import React, { useRef, useState } from 'react';

const NameReader = () => {
  const inputRef = useRef(null); // Using useRef to access the input field
  const [name, setName] = useState(''); // State to hold the displayed name
  const [error, setError] = useState(false); // State to track if the input is empty

  // Function to handle button click and read input value
  const handleSubmit = () => {
    const enteredName = inputRef.current.value; // Access the input field's value directly

    if (enteredName.trim()) {
      setName(enteredName); // Set the name if it's not empty
      setError(false); // Reset any previous error
      inputRef.current.value = ''; // Clear the input field after submission
    } else {
      setError(true); // Show error if the input is empty
    }
  };

  return (
    <div className="p-4">
      <div className="flex gap-2">
        <input
          type="text"
          ref={inputRef} // Using ref to get the input's value
          placeholder="Enter your name"
          className="p-2 border border-gray-300 rounded"
        />
        <button
          onClick={handleSubmit} // Handle button click
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Submit
        </button>
      </div>

      {/* Display error if the input is empty */}
      {error && (
        <p className="mt-2 text-red-500">Please enter a name before submitting.</p>
      )}

      {/* Conditionally render the name if it's entered */}
      {name && (
        <p className="mt-4">
          Your name is: <strong>{name}</strong>
        </p>
      )}
    </div>
  );
};

export default NameReader;
