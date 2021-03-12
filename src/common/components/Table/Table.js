import React from 'react';
import s from './table.module.scss'

export const Table = ({activePartOfLanguage, partsOfLanguageArray}) => {
  return (
    <div className={s["table-tab"]}>
      <div className={s["table-tab__item"]}>
        <div className={s["word"]}></div>
        <div className={s["dash"]}>-</div>
        <div className={s["part"]}></div>
      </div>
      {
        partsOfLanguageArray.map((partOfLanguage) => 
          activePartOfLanguage === partsOfLanguageArray.id && 
            <div className="table-tab__content">
              {partOfLanguage.content}
            </div>
        ) 
      }
    </div>
  )
}  
