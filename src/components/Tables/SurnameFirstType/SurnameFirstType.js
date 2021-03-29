import s from './SurnameFirstType.module.scss';

export const SurnameFirstType = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.pluralCases).length !== 0;
  const lengthOfSecondColumn = Object.keys(wordJson.pluralCases).length !== 0;
  return (
    <table className={s['surname1-table']}>
      <thead className={s['surname1-table__head']}>
        <tr className={s['surname1-table__head__row']}>
          <th>Відмінок</th>
          {lengthOfFirstColumn === 0 ? (
            <>
              <th></th>
              <th>Чол. р.</th>
            </>
          ) : (
            <th>Чол. р.</th>
          )}
          {lengthOfSecondColumn === 0 ? (
            <>
              <th></th>
            </>
          ) : (
            <th>Множина</th>
          )}
        </tr>
      </thead>
      <tbody className={s['surname1-table__body']}>
        <tr className={s['surname1-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['surname1-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        <tr className={s['surname1-table__body__column']}>
          {Object.values(wordJson.pluralCases).map((item, id) => (
            <td className={s['surname1-table__body__column__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfSecondColumn && (
          <tr className={s['surname1-table__body__column']}>
            {Object.values(wordJson.singleMaleFemaleCases).map((item, id) => (
              <td className={s['surname1-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};