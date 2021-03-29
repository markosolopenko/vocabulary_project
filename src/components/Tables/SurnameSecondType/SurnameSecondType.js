import s from './SurnameSecondType.module.scss';

export const SurnameSecondType = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.pluralCases).length !== 0;
  const lengthOfSecondColumn = Object.keys(wordJson.singleMaleCases).length !== 0;
  return (
    <table className={s['surname2-table']}>
      <thead className={s['surname2-table__head']}>
        <tr className={s['surname2-table__head__row']}>
          <th>Відмінок</th>
          {!lengthOfFirstColumn ? (
            <>
              <th>Множина</th>
              <th></th>
            </>
          ) : !lengthOfSecondColumn ? (
            <>
              <th>Чол. і Жін. р.</th>
              <th></th>
            </>
          ) : (
            <>
              <th>Чол. і Жін. р.</th>
              <th>Множина</th>
            </>
          )}
        </tr>
      </thead>
      <tbody className={s['surname2-table__body']}>
        <tr className={s['surname2-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['surname2-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfFirstColumn && (
          <tr className={s['surname2-table__body__column']}>
            {Object.values(wordJson.pluralCases).map((item, id) => (
              <td className={s['surname2-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfSecondColumn && (
          <tr className={s['surname2-table__body__column']}>
            {Object.values(wordJson.singleMaleCases).map((item, id) => (
              <td className={s['surname2-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};
