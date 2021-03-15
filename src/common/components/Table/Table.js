import React from 'react';
import s from './table.module.scss'

export const Table = ({activePartOfLanguage, partsOfLanguageArray, wordJson}) => {
  const {word, part} = wordJson;
  return (
    <div className={s["table-tab"]}>
      { word ? 
      <div className={s["table-tab__item"]}>
        <div className={s["word"]}>{word}</div>
        <div className={s["dash"]}>-</div>
        <div className={s["part"]}>{part}</div>
      </div> : null
      }
      {/* {
        partsOfLanguageArray.map((partOfLanguage) => 
          activePartOfLanguage === partsOfLanguageArray.id && 
            <div className="table-tab__content">
              {partOfLanguage.content}
            </div>
        ) 
      } */}
    </div>
  )
}  
