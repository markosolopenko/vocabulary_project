import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import s from './Subscription.module.scss';

export const Subscription = ({ wordJson }) => {
  return (
    <div className={s.subscription}>
      {Object.keys(wordJson).length !== 0 && wordJson.definitions.length !== 0 ? (
        wordJson.definitions.map((definition, id) => (
          <div key={id}>
            <Typography component="h4" style={{ fontWeight: '600', padding: '10px', minWidth: '500px' }}>
              {definition.definition}
            </Typography>
            {definition.meanings &&
              definition.meanings.map((meaning, index) => (
                <Card className={s.subscription__root} key={index}>
                  <CardContent>
                    <Typography variant="body2" component="p">
                      {meaning.meaning}
                    </Typography>
                  </CardContent>
                </Card>
              ))}
          </div>
        ))
      ) : (
        <div className={s['not-found']}>Для цього слова немає опису</div>
      )}
    </div>
  );
};
