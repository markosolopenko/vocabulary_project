import s from './Pronoun.module.scss';

export const Pronoun = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.generalCases).length !== 0;
  return (
    <table className={s['pronoun-table']}>
      <thead className={s['pronoun-table__head']}>
        <tr className={s['pronoun-table__head__row']}>
          <th>Відмінок</th>
        </tr>
      </thead>
      <tbody className={s['pronoun-table__body']}>
        <tr className={s['pronoun-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['pronoun-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfFirstColumn && (
          <tr className={s['pronoun-table__body__column']}>
            {Object.values(wordJson.generalCases).map((item, id) => (
              <td className={s['pronoun-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};
