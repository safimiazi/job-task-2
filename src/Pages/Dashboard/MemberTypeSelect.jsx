/* eslint-disable react/prop-types */
import { useState } from 'react';
import Select from 'react-select';

const MemberTypeSelect = ({ onMemberTypeChange }) => {
  const options = [
    { value: 'LifeMember', label: 'Life Member' },
    { value: 'HonoraryMember', label: 'Honorary Member' },
    { value: 'InstitutionalMember', label: 'Institutional Member' },
    // Add more options as needed
  ];

  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectChange = (selectedOption) => {
   
    setSelectedOption(selectedOption);
    onMemberTypeChange(selectedOption); // Call the function from props to send the value to the parent
  };

  return (

    <div className="mb-2">
      <label className='text-[#777] text-[18px]font-normal '>2. Member Type<span className="text-red-500">*</span></label><br />
      <Select
        options={options}
        isSearchable={true}
        placeholder="Select Member Type"
        value={selectedOption}
        onChange={handleSelectChange}
        required
        theme={(theme) => ({
          ...theme,
          borderRadius: 2,
          colors: {
            ...theme.colors,
            primary25: 'white',
            primary: '#2AA778',
          },
        })}
      />
     
    </div>
  );
};

export default MemberTypeSelect;