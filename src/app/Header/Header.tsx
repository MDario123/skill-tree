import { AppBar, Typography } from "@mui/material";
import type { JSX } from "react";

export function Header(): JSX.Element {
  return (
    <AppBar position="relative">
      <Typography variant="h2">Skill Tree</Typography>
    </AppBar>
  );
}
