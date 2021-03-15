import React, { useMemo, useState } from 'react';
import s from './conjugation.module.scss';

export const Conjugation = () => {
  const [rows, setRows] = useState([
    "Називний", "Родовий", "Давальний", "Знахідний", "Орудний", "Місцевий", "Кличний"
  ]);
  const reduceRows = useMemo(() => {
    return rows.map((row, id) => {
      return (
        <div key={id} className={s['conjugation-column__row']}>
          {row}
        </div>
      )
    })
  }, [rows]); 
  return (
    <div className={s.conjugation__column}>
      {reduceRows}
    </div>
  )
}
