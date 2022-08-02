import React, { useEffect, useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import Select from 'react-select';
import './select.scss'

const Dropdown = ({ label, name, data, onChange, placeholder, validationRules }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const {
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  useEffect(() => {
  }, [selectedOption])
  const onChangeValue = (selectedOption) => {
    setSelectedOption(selectedOption)
    onChange(selectedOption.value)
  }
  let options = []
  data && data.map((item, index) => {
    let obj = {};
    obj = {
      id: item._id,
      value: item.name,
      label: item.name
    }
    options.push(obj);
  })
  const customStyles = {
    indicatorSeparator: (styles) => ({ display: 'none' }),
    indicatorContainer: (styles) => ({ color: 'red', backgroundColor: 'red' }),
    option: (provided, state) => ({
      ...provided,
      '&:hover': {
        // backgroundColor: '#232323',
        color: '#ffffff',
      },

      color: state.isSelected ? 'white' : 'white',
      // backgroundColor: state.isSelected ? '#232323' : '#232323',
    }),
    dropdownIndicator: (base, state) => ({
      ...base,
      transition: 'all .2s ease',
      transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
      color:"#2c2c2c",
      cursor:'pointer'
    }),
    valueContainer: (base, state) => ({
      ...base,
      color: '#ffffff',
    }),
    control: (base, state) => ({
      ...base,
      color: state.isSelected ? 'red' : 'blue',
      backgroundColor: state.isSelected ? '#fff' : '#fff',
      width: '100%',
      minHeight:'54px',
      borderRadius:'10px',
      borderColor: 'transparent',
      cursor:'pointer',
      boxShadow:" 0px 3px 4px 1px rgba(0,0,0,0.2)" 
    }),
    singleValue: (base, state) => ({
      ...base,
      color: state.isSelected ? '#000' : '#000',
      fontSize: '17px',
    }),
    menuList: (base, state) => ({
      ...base,
      paddingTop: '0',
      paddingBottom: '0',
      zIndex: '3',
      backgroundColor: "#a0a0a0"
    }),
  };
  return (
    <>
      {validationRules ? (
        <>
          <Controller
            name={name}
            value={selectedOption}
            rules={validationRules}
            render={(({ field }) => (
              <Select
                placeholder={placeholder}
                value={selectedOption}
                onChange={onChangeValue}
                options={options}
                className='select'
                styles={customStyles}
                {...field}

              />
            ))}
          />
          {error && <div className='error'><p>Please {placeholder}</p></div>}
        </>
      ) : (
        <>
          <Select
            placeholder={placeholder}
            value={selectedOption}
            onChange={onChangeValue}
            options={options}
            className='select'
            styles={customStyles}
          />
        </>
      )}
    </>
  )
}

export default Dropdown