import s from './TableContainer.module.scss';

export const TableContainer = ({ tablesConfigArray, wordJson }) => {
  return (
    <div className={s['table-container']}>
      {wordJson.word && (
        <>
          <div className={s['table-container__item']}>
            <div className={s['table-container__item__word']}>{wordJson.word}</div>
            <div className={s['table-container__item__dash']}>&nbsp;-&nbsp;</div>
            <div className={s['table-container__item__part']}>{wordJson.part}</div>
          </div>
          <div className={s['table-container__line']}></div>

          <div className={s['table-container__item']}>
            {tablesConfigArray.map(
              (table, id) =>
                (wordJson.wordType === table.part || table.part.includes(wordJson.wordType)) && (
                  <div className={s['table-container__item__table']} key={id}>
                    {table.content}
                  </div>
                ),
            )}
          </div>
        </>
      )}
    </div>
  );
};
