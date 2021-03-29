import s from './Surname.module.scss';

export const Surname = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.pluralCases).length !== 0;
  const lengthOfSecondColumn = Object.keys(wordJson.singleMaleCases).length !== 0;
  const lengthOfThirdColumn = Object.keys(wordJson.singleFemaleCases).length !== 0;
  return (
    <table className={s['surname-table']}>
      <thead className={s['surname-table__head']}>
        <tr className={s['surname-table__head__row']}>
          <th>Відмінок</th>
          {!lengthOfFirstColumn ? (
            <>
              <th>Жін. р.</th>
              <th></th>
              <th></th>
            </>
          ) : !lengthOfSecondColumn ? (
            <>
              <th>Чол. р.</th>
              <th></th>
              <th></th>
            </>
          ) : !lengthOfThirdColumn ? (
            <>
              <th>Чол. р.</th>
              <th>Жін. р.</th>
              <th></th>
            </>
          ) : (
            <>
              <th>Чол. р.</th>
              <th>Жін. р.</th>
              <th>Множина</th>
            </>
          )}
        </tr>
      </thead>
      <tbody className={s['surname-table__body']}>
        <tr className={s['surname-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['surname-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfFirstColumn && (
          <tr className={s['surname-table__body__column']}>
            {Object.values(wordJson.pluralCases).map((item, id) => (
              <td className={s['surname-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfSecondColumn && (
          <tr className={s['surname-table__body__column']}>
            {Object.values(wordJson.singleMaleCases).map((item, id) => (
              <td className={s['surname-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfThirdColumn && (
          <tr className={s['surname-table__body__column']}>
            {Object.values(wordJson.singleFemaleCases).map((item, id) => (
              <td className={s['surname-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};
