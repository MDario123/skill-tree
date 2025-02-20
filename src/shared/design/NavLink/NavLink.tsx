import { Link, Typography } from "@mui/material";
import type { JSX } from "react";

export function NavLink({
  href,
  content,
}: {
  href: string;
  content: string;
}): JSX.Element {
  return (
    <Typography>
      <Link href={href} underline="none">
        {content}
      </Link>
    </Typography>
  );
}
