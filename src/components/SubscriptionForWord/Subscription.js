import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import s from './Subscription.module.scss';

export const Subscription = ({ wordJson }) => {
  return (
    <div className={s.subscription}>
      {Object.keys(wordJson).length !== 0 && wordJson.definitions.length !== 0 ? (
        wordJson.definitions.map((definition, id) => (
          <Card className={s.subscription__root}>
            <CardContent>
              <Typography variant="h7" component="h3" key={id}>
                {definition.definition}
              </Typography>
              {definition.meanings &&
                definition.meanings.map((meaning, index) => (
                  <Typography variant="body2" component="p" key={index}>
                    {meaning.meaning}
                  </Typography>
                ))}
              )
            </CardContent>
          </Card>
        ))
      ) : (
        <div className={s['not-found']}>Для цього слова немає опису</div>
      )}
    </div>
  );
};
