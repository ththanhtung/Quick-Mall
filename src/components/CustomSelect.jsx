import React from 'react'
import Select from 'react-select'

const CustomSelect = ({label, options, defaultValue}) => {
  return (
    <div className="container-custom-select">
        <h3>{label}</h3>
        <Select options={options} defaultValue={defaultValue}/>
    </div>
  )
}

export default CustomSelect