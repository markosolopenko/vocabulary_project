import s from './NumbersSecond.module.scss';

export const NumbersSecond = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.singleMaleCases).length !== 0;
  const lengthOfSecondColumn = Object.keys(wordJson.singleFemaleCases).length !== 0;
  return (
    <table className={s['number-second-table']}>
      <thead className={s['number-second-table__head']}>
        <tr className={s['number-second-table__head__row']}>
          <th>Відмінок</th>
          <th>Чол. р.</th>
          <th>Жін. р.</th>
        </tr>
      </thead>
      <tbody className={s['number-second-table__body']}>
        <tr className={s['number-second-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['number-second-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfFirstColumn && (
          <tr className={s['number-second-table__body__column']}>
            {Object.values(wordJson.singleMaleCases).map((item, id) => (
              <td className={s['number-second-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfSecondColumn && (
          <tr className={s['number-second-table__body__column']}>
            {Object.values(wordJson.singleFemaleCases).map((item, id) => (
              <td className={s['number-second-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};
