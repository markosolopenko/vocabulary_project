import s from './Adjective.module.scss';

export const Adjective = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.pluralCases).length !== 0;
  const lengthOfSecondColumn = Object.keys(wordJson.singleMaleCases).length !== 0;
  const lengthOfThirdColumn = Object.keys(wordJson.singleFemaleCases).length !== 0;
  const lengthOfFourthColumn = Object.keys(wordJson.singleMiddleCases).length !== 0;
  return (
    <table className={s['adjective-table']}>
      <thead className={s['adjective-table__head']}>
        <tr className={s['adjective-table__head__top']}>
          <th>Однина</th>
        </tr>
        <tr className={s['adjective-table__head__row']}>
          <th className={s['adjective-table__head__row__item']}>Відмінок</th>
          <th className={s['adjective-table__head__row__item']}>Чол. р.</th>
          <th className={s['adjective-table__head__row__item']}>Жін. р.</th>
          <th className={s['adjective-table__head__row__item']}>Сер. р.</th>
          <th className={s['adjective-table__head__row__item']}>Множина</th>
        </tr>
      </thead>
      <tbody className={s['adjective-table__body']}>
        <tr className={s['adjective-table__body__conjunction']}>
          {conjuctions.map((item, id) => (
            <td className={s['adjective-table__body__conjunction__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        {lengthOfFirstColumn && (
          <tr className={s['adjective-table__body__column']}>
            {Object.values(wordJson.pluralCases).map((item, id) => (
              <td className={s['adjective-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfSecondColumn && (
          <tr className={s['adjective-table__body__column']}>
            {Object.values(wordJson.singleMaleCases).map((item, id) => (
              <td className={s['adjective-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfThirdColumn && (
          <tr className={s['adjective-table__body__column']}>
            {Object.values(wordJson.singleFemaleCases).map((item, id) => (
              <td className={s['adjective-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
        {lengthOfFourthColumn && (
          <tr className={s['adjective-table__body__column']}>
            {Object.values(wordJson.singleMiddleCases).map((item, id) => (
              <td className={s['adjective-table__body__column__item']} key={id}>
                {item}
              </td>
            ))}
          </tr>
        )}
      </tbody>
    </table>
  );
};
