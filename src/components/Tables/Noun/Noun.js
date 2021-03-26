import s from './Noun.module.scss';

export const Noun = ({ wordJson }) => {
  const conjuctions = [
    'Називний',
    'Родовий',
    'Давальний',
    'Знахідний',
    'Орудний',
    'Місцевий',
    'Кличний',
  ];
  return (
    <table className={s['noun-table']}>
      <thead className={s['noun-table__head']}>
        <tr className={s['noun-table__head__row']}>
          <th>Відмінок</th>
          <th>Однина</th>
          <th>Множина</th>
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
        <tr className={s['noun-table__body__row']}>
          {Object.values(wordJson.singleCases).map((item, id) => (
            <td className={s['noun-table__body__row__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
        <tr className={s['noun-table__body__row']}>
          {Object.values(wordJson.pluralCases).map((item, id) => (
            <td className={s['noun-table__body__row__item']} key={id}>
              {item}
            </td>
          ))}
        </tr>
      </tbody>
    </table>
  );
};
