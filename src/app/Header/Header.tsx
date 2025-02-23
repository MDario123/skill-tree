import type { JSX } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "#design";
import { createServerClient } from "#shared/services/supabase";

export async function Header(): Promise<JSX.Element> {
  const supabase = await createServerClient();
  const { error, data } = await supabase.auth.getUser();

  return (
    <AppBar position="relative" sx={{ paddingX: 1, paddingY: 0.5 }}>
      <Toolbar sx={{ gap: 2 }}>
        <NavLink href="/" content="Home" />
        <NavLink href="/graph" content="Graph" />
        <Box flexGrow={1} />
        {error || !data?.user ? (
          <NavLink href="/login" content={"Log In"} />
        ) : (
          <NavLink href="/logout" content={"Logout"} />
        )}
      </Toolbar>
    </AppBar>
  );
}
