import { Table, TableBody, TableHead, TableCell, TableRow, makeStyles, TableContainer, Paper } from '@material-ui/core';

export const CardinalNumbers = ({ wordJson, conjuctions }) => {
  const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
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
          <TableCell className={classes.tableBodyCell} align="center">
            {Object.values(wordJson.generalCases)[i]}
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
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell className={classes.tableHeadRow} align="center">
              Відмінок
            </TableCell>
            <TableCell className={classes.tableHeadRow}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>{createData()}</TableBody>
      </Table>
    </TableContainer>
  );
};
