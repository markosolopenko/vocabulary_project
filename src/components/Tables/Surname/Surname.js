import {
  Table,
  TableBody,
  TableHead,
  TableCell,
  TableRow,
  makeStyles,
  TableContainer,
  Paper,
} from '@material-ui/core';

export const Surname = ({ wordJson, conjuctions }) => {
  const lengthOfFirstColumn = Object.keys(wordJson.pluralCases).length !== 0;
  const lengthOfSecondColumn = Object.keys(wordJson.singleMaleCases).length !== 0;
  const lengthOfThirdColumn = Object.keys(wordJson.singleFemaleCases).length !== 0;

  const useStyles = makeStyles({
    table: {},
    tableConjuctions: {
      borderBottom: '2px solid orange',
      color: 'rgb(68, 66, 66)',
      fontWeight: '700',
      fontSize: '16px',
    },
    tableHeadRow: {
      fontWeight: 'bold',
      borderBottom: '2px solid orange',
      fontSize: '15px',
    },
    tableBodyCell: {
      fontSize: '16px',
    },
  });
  const classes = useStyles();
  const createData = () => {
    const rows = [];
    const callback = (i) => {
      return (
        <TableRow key={i}>
          <TableCell className={classes.tableConjuctions} component="th" scope="row">
            {conjuctions[i]}
          </TableCell>
          {lengthOfFirstColumn && (
            <TableCell className={classes.tableBodyCell} align="center">
              {Object.values(wordJson.pluralCases)[i]}
            </TableCell>
          )}
          {lengthOfSecondColumn && (
            <TableCell className={classes.tableBodyCell} align="center">
              {Object.values(wordJson.singleMaleCases)[i]}
            </TableCell>
          )}
          {lengthOfThirdColumn && (
            <TableCell className={classes.tableBodyCell} align="center">
              {Object.values(wordJson.singleFemaleCases)[i]}
            </TableCell>
          )}
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
            <TableCell className={classes.tableHeadRow} align="center">
              Відмінок
            </TableCell>
            {lengthOfFirstColumn && (
              <TableCell className={classes.tableHeadRow} align="center">
                Чол. р.
              </TableCell>
            )}
            {lengthOfSecondColumn && (
              <TableCell className={classes.tableHeadRow} align="center">
                Жін. р.
              </TableCell>
            )}
            {lengthOfThirdColumn && (
              <TableCell className={classes.tableHeadRow} align="center">
                Множина
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>{createData()}</TableBody>
      </Table>
    </TableContainer>
  );
};
