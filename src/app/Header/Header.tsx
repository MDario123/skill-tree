import type { JSX } from "react";
import { AppBar, Box, Toolbar } from "@mui/material";
import { NavLink } from "#design";
import { createClient } from "#shared/services/supabase/server";

export async function Header(): Promise<JSX.Element> {
  const supabase = await createClient();
  const { error, data } = await supabase.auth.getUser();

  return (
    <AppBar position="relative" sx={{ paddingX: 1, paddingY: 0.5 }}>
      <Toolbar>
        <NavLink href="/" content="Home" />
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
