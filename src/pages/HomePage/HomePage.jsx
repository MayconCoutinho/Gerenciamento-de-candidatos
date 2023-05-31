import { Stack } from "@mui/system";
import React, { useContext } from "react";
import { Footer } from "../../components/Footer";
import { HeaderBar } from "../../components/HeaderBar";
import { TableCandidates } from "../../components/TableCandidates";
import { ApiContext } from "../../context/Api";
import { Typography } from "@mui/material";
import { RegisterCandidate } from "../../components/RegisterCanditate";

export const HomePage = () => {
  const { candidates } = useContext(ApiContext);

  return (
    <>
      <HeaderBar />
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        marginTop={20}
      >
        <Typography
          variant="caption"
          fontSize={30}
          color={"#333"}
          fontWeight={600}
        >
          Gerenciando Candidatos
        </Typography>
      </Stack>

      <Stack
        direction="column"
        paddingTop={5}
        paddingLeft={10}
        paddingRight={10}
      >
        <RegisterCandidate />
      </Stack>

      <Stack
        justifyContent="center"
        alignItems="center"
        padding={5}
        marginTop={2}
        marginBottom={40}
      >
        <TableCandidates rows={candidates} />
      </Stack>
      <Footer />
    </>
  );
};
