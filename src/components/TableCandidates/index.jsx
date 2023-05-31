import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { TbEdit, TbTrashXFilled } from "react-icons/tb";
import { Stack, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { ModalEdit } from "../ModalEdit";
import { ModalDeleteAlert } from "../ModalDeleteAlert";
import { FunctionsContext } from "../../context/Functions";

const columns = [
  { id: "media", label: "Media", minWidth: 100 },
  { id: "codCandidato", label: "Id", minWidth: 100 },
  { id: "nomeCandidato", label: "Nome", minWidth: 100 },
  { id: "cpf", label: "CPF", minWidth: 100 },
  { id: "telefone", label: "Telefone", minWidth: 100 },
  { id: "nota01", label: "Nota 1", minWidth: 100 },
  { id: "nota02", label: "Nota 2", minWidth: 100 },
  { id: "nota03", label: "Nota 3", minWidth: 100 },
  { id: "editar", label: "", minWidth: 100 },
];

export const TableCandidates = ({ rows }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const { fuctionModalEditOpen, fuctionModalDeleteOpen } =
    useContext(FunctionsContext);

  const calculaMedia = (nota01, nota02, nota03) => {
    const media = (nota01 + nota02 + nota03) / 3;
    const apto = (
      <Typography
        backgroundColor="#007c29"
        borderRadius={1}
        color={"#fff"}
        textAlign={"center"}
      >
        Apto
      </Typography>
    );
    const inapto = (
      <Typography
        backgroundColor="#d40000"
        borderRadius={1}
        color={"#fff"}
        textAlign={"center"}
      >
        Inapto
      </Typography>
    );

    return media >= 7 ? apto : inapto;
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <>
        <ModalEdit />
        <ModalDeleteAlert />
      </>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  sx={{
                    backgroundColor: "#222",
                    color: "#fff",
                    fontWeight: 500,
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.code}
                    justifyContent="center"
                    alignItems="center"
                  >
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.id === "media"
                            ? calculaMedia(
                                row.Notas[0].nota01,
                                row.Notas[0].nota02,
                                row.Notas[0].nota03
                              )
                            : ""}
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                          {column.id === "nota01" || "nota02" || "nota03"
                            ? row.Notas[0][column.id]
                            : ""}
                          {column.id === "editar" ? (
                            <>
                              <Stack
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                                color={"#1d1d1d"}
                                fontSize={30}
                                spacing={3}
                                sx={{ cursor: "pointer" }}
                              >
                                <Stack
                                  sx={{
                                    "&:hover": {
                                      color: "#e47900",
                                    },
                                  }}
                                >
                                  <TbEdit
                                    onClick={() =>
                                      fuctionModalEditOpen(row.codCandidato)
                                    }
                                    sx={{}}
                                  />
                                </Stack>

                                <Stack
                                  sx={{
                                    "&:hover": {
                                      color: "#a80404",
                                    },
                                  }}
                                >
                                  <TbTrashXFilled
                                    onClick={() =>
                                      fuctionModalDeleteOpen(row.codCandidato)
                                    }
                                  />
                                </Stack>
                              </Stack>
                            </>
                          ) : (
                            ""
                          )}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
