import React from 'react'

const StateColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column

  const options = ['Free', 'Locked']
    
      return (
        <select
          value={filterValue}
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

export default StateColumnFilter