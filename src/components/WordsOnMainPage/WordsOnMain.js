import React from 'react';
import s from './wordsOnMainPage.module.scss';

const WordsOnMainPage = ({words}) => {
    return (
        <div className={s["words-box"]}>
            {   
                words.map((word, id) => 
                    <div 
                        key={id} 
                        className={s["words-box__item"]}>
                    {word.outputWord}
                    </div>
                )
            }
        </div>
    )
};

export default WordsOnMainPage;