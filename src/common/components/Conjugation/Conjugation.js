import React, { useMemo } from 'react';


const rows = [ 
  "Називний", "Родовий", "Давальний", 
  "Знахідний", "Орудний", "Місцевий", "Кличний"
];

export const Conjugation = () => {
  const renderedRows = useMemo(() => {
    return rows.map((row, id) => {
      return (
        <div key={id} className='conjugation-column__row'>
          {row}
        </div>
      )
    })
  }, []); 
  return (
    <div className='conjugation__column'>
      {renderedRows}
    </div>
  )
}
