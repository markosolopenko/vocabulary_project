import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

export const ImperfectVerb = ({ wordJson }) => {
  const { imperative, futureTime, presentTime, pastTime } = wordJson;

  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
    container: {
      maxHeight: 540,
    },
    withOrangeUnderline: {
      borderBottom: '2px solid orange',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    withBlackUnderline: {
      borderBottom: '1px solid #acacac',
      textAlign: 'center',
    },
    title: {
      textAlign: 'center',
      fontSize: '16px',
    },
  });

  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>Інфінітив</TableCell>
              <TableCell className={classes.withBlackUnderline} colSpan={2}>
                {wordJson.infinitive}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline}></TableCell>
              <TableCell className={classes.withOrangeUnderline}>Однина</TableCell>
              <TableCell className={classes.withOrangeUnderline}>Множина</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Наказовий спосіб
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>1 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}></TableCell>
              <TableCell className={classes.withBlackUnderline}>{imperative.pluralFirstIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>2 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{imperative.singleSecondIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{imperative.pluralSecondIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                МАЙБУТНІЙ ЧАС
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>1 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{futureTime.singleFirstIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{futureTime.pluralFirstIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>2 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{futureTime.singleSecondIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{futureTime.pluralSecondIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>3 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{futureTime.singleThirdIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{futureTime.pluralThirdIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                ТЕПЕРІШНІЙ ЧАС
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>1 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{presentTime.singleFirstIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{presentTime.pluralFirstIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>2 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{presentTime.singleSecondIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{presentTime.pluralSecondIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>3 особа</TableCell>
              <TableCell className={classes.withBlackUnderline}>{presentTime.singleThirdIndividual}</TableCell>
              <TableCell className={classes.withBlackUnderline}>{presentTime.pluralThirdIndividual}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Активний дієприкметник
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline} colSpan={3}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Дієприслівник
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline} colSpan={3}>
                {presentTime.adverb}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                МИНУЛИЙ ЧАС
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>чол. р.</TableCell>
              <TableCell className={classes.withBlackUnderline}>{pastTime.singleMale}</TableCell>
              <TableCell className={classes.withBlackUnderline} rowSpan={3}>
                {pastTime.pluralMale}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>жін. р.</TableCell>
              <TableCell className={classes.withBlackUnderline}>{pastTime.singleFemale}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withOrangeUnderline}>сер. р.</TableCell>
              <TableCell className={classes.withBlackUnderline}>{pastTime.singleMiddle}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Активний дієприкметник
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline} colSpan={3}></TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Пасивний дієприкметник
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline} colSpan={3}>
                {pastTime.passiveAdjective}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Безособова форма
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline} colSpan={3}>
                {pastTime.impersonalForm}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={`${classes.withOrangeUnderline} ${classes.title}`} colSpan={3}>
                Дієприслівник
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className={classes.withBlackUnderline} colSpan={3}>
                {pastTime.adverb}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
};
