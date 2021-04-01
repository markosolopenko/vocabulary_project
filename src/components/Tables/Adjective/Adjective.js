import { Table, TableBody, TableHead, TableCell, TableRow, makeStyles, TableContainer, Paper } from '@material-ui/core';
import s from './Adjective.module.scss';

export const Adjective = ({ wordJson, conjuctions }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 400,
    },
    tableConjuctions: {
      borderBottom: '2px solid orange',
      color: 'rgb(68, 66, 66)',
      fontWeight: '700',
    },
    tableHeadRow: {
      fontWeight: 'bold',
      borderBottom: '2px solid orange',
      fontSize: '15px',
    },
  });
  const classes = useStyles();
  // const lengthOfFirstColumn = Object.keys(wordJson.pluralCases).length !== 0;
  // const lengthOfSecondColumn = Object.keys(wordJson.singleMaleCases).length !== 0;
  // const lengthOfThirdColumn = Object.keys(wordJson.singleFemaleCases).length !== 0;
  // const lengthOfFourthColumn = Object.keys(wordJson.singleMiddleCases).length !== 0;
  const createData = () => {
    const rows = [];
    const callback = (i) => {
      return (
        <TableRow key={i}>
          <TableCell className={classes.tableConjuctions} component="th" scope="row">
            {conjuctions[i]}
          </TableCell>
          <TableCell align="center">{Object.values(wordJson.pluralCases)[i]}</TableCell>
          <TableCell align="center">{Object.values(wordJson.singleMaleCases)[i]}</TableCell>
          <TableCell align="center">{Object.values(wordJson.singleFemaleCases)[i]}</TableCell>
          <TableCell align="center">{Object.values(wordJson.singleMiddleCases)[i]}</TableCell>
        </TableRow>
      );
    };
    for (let i = 0; i < conjuctions.length; i++) {
      rows.push(callback(i));
    }
    return <>{rows}</>;
  };
  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          {/* <TableRow>
            <TableCell className={classes.tableHeadRow}>Однина</TableCell>
          </TableRow> */}
          <TableRow>
            <TableCell className={classes.tableHeadRow} align="center">
              Відмінок
            </TableCell>
            <TableCell className={classes.tableHeadRow} align="center">
              Чол. р.
            </TableCell>
            <TableCell className={classes.tableHeadRow} align="center">
              Жін. р.
            </TableCell>
            <TableCell className={classes.tableHeadRow} align="center">
              Сер. р.
            </TableCell>
            <TableCell className={classes.tableHeadRow} align="center">
              Множина
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{createData()}</TableBody>
      </Table>
    </TableContainer>
  );
};
