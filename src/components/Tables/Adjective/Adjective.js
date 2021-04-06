import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const Adjective = ({ wordJson, conjuctions }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
      minHeight: 540,
    },
    tableConjuctions: {
      borderBottom: '2px solid orange',
      color: 'rgb(68, 66, 66)',
      fontWeight: '700',
      fontSize: '16px',
      textAlign: 'center',
    },
    tableHeadCell: {
      fontWeight: 'bold',
      borderBottom: '2px solid orange',
      fontSize: '16px',
      textAlign: 'center',
    },
    tableBodyCell: {
      fontSize: '16px',
      textAlign: 'center',
    },
    top: {
      textAlign: 'center',
      borderBottom: '2px solid orange',
      fontWeight: 'bold',
      fontSize: '16x',
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
          <TableCell className={classes.tableConjuctions}>{conjuctions[i]}</TableCell>
          <TableCell className={classes.tableBodyCell}>{Object.values(wordJson.pluralCases)[i]}</TableCell>
          <TableCell className={classes.tableBodyCell}>{Object.values(wordJson.singleMaleCases)[i]}</TableCell>
          <TableCell className={classes.tableBodyCell}>{Object.values(wordJson.singleFemaleCases)[i]}</TableCell>
          <TableCell className={classes.tableBodyCell}>{Object.values(wordJson.singleMiddleCases)[i]}</TableCell>
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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadCell} rowSpan={2}>
              Відмінок
            </TableCell>
            <TableCell className={classes.top} colSpan={3}>
              Однина
            </TableCell>
            <TableCell className={classes.tableHeadCell} rowSpan={2}>
              Множина
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableHeadCell}>Чол. р.</TableCell>
            <TableCell className={classes.tableHeadCell}>Жін. р.</TableCell>
            <TableCell className={classes.tableHeadCell}>Сер. р.</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{createData()}</TableBody>
      </Table>
    </TableContainer>
  );
};
