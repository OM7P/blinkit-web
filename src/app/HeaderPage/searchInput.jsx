'use client';

import { Input } from '@/components/ui/input';
import React, { useEffect, useState } from 'react';
import { CiSearch } from 'react-icons/ci';

function SearchInput() {
  const textSequence = [
    'Search milk',
    'Search orange',
    'Search bread',
    'Search eggs',
    'Search butter',
    'Search apples',
    'Search bananas',
    'Search carrots',
    'Search chicken',
    'Search cheese',
  ];

  const [displayText, setDisplayText] = useState('Search milk');
  const [inputText, setInputText] = useState(''); // Track user input
  const [isFocused, setIsFocused] = useState(false); // Track if input is focused

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      // Only change the animated text if input is not focused and empty
      if (!isFocused && !inputText) {
        index = (index + 1) % textSequence.length;
        setDisplayText(textSequence[index]);
      }
    }, 4000); // Change text every 4 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [isFocused, inputText]);

  const handleInputChange = (e) => {
    setInputText(e.target.value); // Update inputText state
  };

  const handleFocus = () => {
    setIsFocused(true); // Hide animated text when input is focused
  };

  const handleBlur = () => {
    setIsFocused(false); // Show animated text again if input is empty
  };

  return (
    <div className="relative left-[20px]">
      {/* Show animated text only if input is not focused and no user input */}
      {!isFocused && !inputText && (
        <span className="absolute top-0 left-0 h-full pl-10 flex items-center text-move w-[500px] pointer-events-none">
          {displayText.slice(0, 6)} {`"` + displayText.slice(7) + `"`}
        </span>
      )}

      <Input
        type="text"
        className="w-[640px] h-[50px] bg-zinc-100 rounded-xl pl-10 border-none"
        value={inputText} // Controlled input to show user input
        onChange={handleInputChange} // Handle text input change
        onFocus={handleFocus} // Hide animation when focused
        onBlur={handleBlur} // Show animation when blurred (if no input)
      />

      <CiSearch className="absolute top-[12px] left-[15px] w-[20px] h-[20px] border-none" />
    </div>
  );
}

export default SearchInput;
