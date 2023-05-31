import { Box } from "@mui/material";
import { Stack } from "@mui/system";

export const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        bottom: 0,
        left: 0,
        height: "50px",
        backgroundColor: "#333",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <span
          style={{
            color: "#f2f2f2",
            opacity: 0.5,
            textAlign: "center",
            marginTop: 20,
          }}
        >
          &copy;2023, Gerence Sistemas. All rights reserved.
        </span>
      </Stack>
    </Box>
  );
};
