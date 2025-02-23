import type React from "react";
import { Box } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      fontSize="1.2rem"
    >
      {children}
    </Box>
  );
}
