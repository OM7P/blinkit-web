'use client'



import { useState } from 'react';
import SidePopProducItem from './SidePopProductItem';

const RadioButtonComponent = ({CheckRadionValue}) => {
  // State to keep track of selected radio button
  const [selectedOption, setSelectedOption] = useState('');

    console.log("CheckRadionValue:::::",CheckRadionValue)
  // Function to handle change
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`You have selected: ${selectedOption}`);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          <input
            type="radio"
            value="option1"
            checked={selectedOption === 'option1'}
            onChange={handleOptionChange}
          />
          Option 1
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === 'option2'}
            onChange={handleOptionChange}
          />
          Option 2
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === 'option3'}
            onChange={handleOptionChange}
          />
          Option 3
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
    {<SidePopProducItem selectedOption={selectedOption}/>}
    </div>
  );
};

export default RadioButtonComponent;
