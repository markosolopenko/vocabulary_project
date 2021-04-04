import { Table, TableBody, TableHead, TableCell, TableRow, makeStyles, TableContainer, Paper } from '@material-ui/core';

export const Adjective = ({ wordJson, conjuctions }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
    tableConjuctions: {
      borderBottom: '2px solid orange',
      color: 'rgb(68, 66, 66)',
      fontWeight: '700',
      fontSize: '16px',
      width: '20%',
    },
    tableHeadCell: {
      fontWeight: 'bold',
      borderBottom: '2px solid orange',
      fontSize: '16px',
    },
    tableBodyCell: {
      fontSize: '16px',
      width: '20%',
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
          <TableCell className={classes.tableConjuctions} component="th" scope="row">
            {conjuctions[i]}
          </TableCell>
          <TableCell className={classes.tableBodyCell} align="center">
            {Object.values(wordJson.pluralCases)[i]}
          </TableCell>
          <TableCell className={classes.tableBodyCell} align="center">
            {Object.values(wordJson.singleMaleCases)[i]}
          </TableCell>
          <TableCell className={classes.tableBodyCell} align="center">
            {Object.values(wordJson.singleFemaleCases)[i]}
          </TableCell>
          <TableCell className={classes.tableBodyCell} align="center">
            {Object.values(wordJson.singleMiddleCases)[i]}
          </TableCell>
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
      <Table>
        <TableHead>
          <TableRow>
            <TableCell rowSpan={2} className={classes.tableHeadCell} align="center">
              Відмінок
            </TableCell>
            <TableCell className={classes.top} colSpan={3}>
              Однина
            </TableCell>
            <TableCell rowSpan={2} className={classes.tableHeadCell} align="center">
              Множина
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className={classes.tableHeadCell} align="center">
              Чол. р.
            </TableCell>
            <TableCell className={classes.tableHeadCell} align="center">
              Жін. р.
            </TableCell>
            <TableCell className={classes.tableHeadCell} align="center">
              Сер. р.
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{createData()}</TableBody>
      </Table>
    </TableContainer>
  );
};
