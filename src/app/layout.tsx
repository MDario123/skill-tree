import type { JSX } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { Box } from "@mui/material";

import { Header } from "./Header";
import { Theme } from "#design";

import "./global.css";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <Theme>
            <Header />
            <Box flexGrow={1} display="flex" justifyContent="center" padding={2}>
              {children}
            </Box>
          </Theme>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
