import s from './Subscription.module.scss';

export const Subscription = ({ wordJson }) => {
  return (
    <div className={s.subscription}>
      {Object.keys(wordJson).length !== 0 && wordJson.definitions.length !== 0 ? (
        wordJson.definitions.map((definition, id) => (
          <div className={s.subscription__item}>
            <div className={s.subscription__item__definition} key={id}>
              {definition.definition}
            </div>
            {definition.meanings &&
              definition.meanings.map((meaning, index) => (
                <p className={s.subscription__item__meaning} style={{ width: '100vh' }} key={index}>
                  {meaning.meaning}
                </p>
              ))}
            )
          </div>
        ))
      ) : (
        <div>Nothing found</div>
      )}
    </div>
  );
};
