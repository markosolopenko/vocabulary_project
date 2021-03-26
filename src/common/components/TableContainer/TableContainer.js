import s from './TableContainer.module.scss';

export const TableContainer = ({ activeTableId, tablesConfigArray, wordJson }) => {
  return (
    <div className={s['table-container']}>
      {wordJson.word && (
        <div className={s['table-container__item']}>
          <div className={s['table-container__item__word']}>{wordJson.word}</div>
          <div className={s['table-container__item__dash']}>&nbsp;-&nbsp;</div>
          <div className={s['table-container__item__part']}>{wordJson.part}</div>
        </div>
      )}
      {wordJson.word && <div className={s['table-container__line']}></div>}
      {wordJson.word && (
        <div className={s['table-container__item']}>
          {tablesConfigArray.map(
            (table, id) =>
              (table.part.includes(wordJson.part) && (
                <div className={s['table-container__item__table']} key={id}>
                  {table.content}
                </div>
              )) ||
              (table.part.includes(wordJson.part.split(' ')[0]) && (
                <div className={s['table-container__item__table']} key={id}>
                  {table.content}
                </div>
              )),
          )}
        </div>
      )}
    </div>
  );
};
