import s from './Noun.module.scss';

export const Noun = ({ wordJson, conjuctions }) => {
  const lengthOfPlural = Object.keys(wordJson.pluralCases).length !== 0;
  const lengthOfSingle = Object.keys(wordJson.singleCases).length !== 0;
  return (
    <table className={s['noun-table']}>
      <thead className={s['noun-table__head']}>
        <tr className={s['noun-table__head__row']}>
          <th>Відмінок</th>
          {!lengthOfSingle ? (
            <>
              <th>Множина</th>
              <th></th>
            </>
          ) : !lengthOfPlural ? (
            <>
              <th>Однина</th>
              <th></th>
            </>
          ) : (
            <>
              <th>Однина</th>
              <th>Множина</th>
            </>
          )}
        </tr>
      </thead>
      <tbody className={s['noun-table__body']}>
        <tr className={s['noun-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['noun-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfSingle && (
          <tr className={s['noun-table__body__column']}>
            {Object.values(wordJson.singleCases).map((item, id) => (
              <td className={s['noun-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfPlural && (
          <tr className={s['noun-table__body__column']}>
            {Object.values(wordJson.pluralCases).map((item, id) => (
              <td className={s['noun-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};
