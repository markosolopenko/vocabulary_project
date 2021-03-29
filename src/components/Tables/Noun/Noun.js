import s from './Noun.module.scss';

export const Noun = ({ wordJson, conjuctions }) => {
  const plCa = Object.keys(wordJson.pluralCases).length !== 0;
  return (
    <table className={s['noun-table']}>
      <thead className={s['noun-table__head']}>
        <tr className={s['noun-table__head__row']}>
          <th>Відмінок</th>
          {Object.keys(wordJson.singleCases).length === 0 ? (
            <>
              <th></th>
              <th>Множина</th>
            </>
          ) : (
            <th>Однина</th>
          )}
          {Object.keys(wordJson.pluralCases).length === 0 ? (
            <>
              <th></th>
            </>
          ) : (
            <th>Множина</th>
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
        <tr className={s['noun-table__body__column']}>
          {plCa
            ? Object.values(wordJson.singleCases).map((item, id) => (
                <td className={s['noun-table__body__column__item']} key={id}>
                  {item}
                </td>
              ))
            : Object.values(wordJson.singleCases).map((item, id) => (
                <td className={s['noun-table__body__column__item']} key={id}>
                  {item}
                </td>
              ))}
        </tr>
        {plCa && (
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
