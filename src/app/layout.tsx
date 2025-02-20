import type { JSX } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box, CssBaseline } from "@mui/material";

import { Header } from "./Header";
import { Theme } from "#design/theme";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            <Header />
            <Box sx={{ padding: 2, display: "flex", justifyContent: "center" }}>
              {children}
            </Box>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
