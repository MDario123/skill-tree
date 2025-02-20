import type { JSX } from "react";
import { AppBar } from "@mui/material";
import { NavLink } from "#design";

export function Header(): JSX.Element {
  return (
    <AppBar position="relative" sx={{ paddingX: 1, paddingY: 0.5 }}>
      <NavLink href="/" content="Home" />
    </AppBar>
  );
}
