import s from './Subscription.module.scss';

export const Subscription = ({ wordJson }) => {
  return (
    <>
      {Object.keys(wordJson).length !== 0 && (
        <div className={s['subscription-tab']}>
          {wordJson.definitions.map((definition, id) => {
            return (
              <div className={s['subscription-tab__element']} key={id}>
                {definition.definition}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
