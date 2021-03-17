import React, { useMemo, useState } from 'react';
import s from './conjugation.module.scss';


const rows = [ 
  "Називний", "Родовий", "Давальний", 
  "Знахідний", "Орудний", "Місцевий", "Кличний"
];

export const Conjugation = () => {
  const renderedRows = useMemo(() => {
    return rows.map((row, id) => {
      return (
        <div key={id} className={s['conjugation-column__row']}>
          {row}
        </div>
      )
    })
  }, []); 
  return (
    <div className={s.conjugation__column}>
      {renderedRows}
    </div>
  )
}
