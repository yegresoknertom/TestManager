import React from 'react'

const StateFilter = ({ filter, setFilter }) => {

  const options = ['Free', 'Locked']
    
      return (
        <select
          value={filter}
          onChange={e => {
            setFilter(e.target.value || undefined)
          }}
        >
          <option value="">All</option>
          {options.map((option, i) => (
            <option key={i} value={option}>
              {option}
            </option>
          ))}
        </select>
      )

}

export default StateFilter