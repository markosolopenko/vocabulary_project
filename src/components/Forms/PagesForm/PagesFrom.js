import React from 'react';
import s from './pagesForm.module.scss';

const PagesForm = () => {
    return (
        <div className={s["pages-form"]}>
            <div className={s["pages-form__arrowback"]}>

            </div>
            <input className={s["pages-form__input"]} />
            <div className={s["pages-form__arrowforward"]}>
                
            </div>
        </div>
    )
}

export default PagesForm;