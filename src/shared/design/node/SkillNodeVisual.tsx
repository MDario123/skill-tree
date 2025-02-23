import { Button, Typography } from "@mui/material";
import { MouseEventHandler } from "react";

interface SkillNodeVisualProps {
  title: string;
  completed: boolean;
  dependenciesCompleted: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function SkillNodeVisual({
  title,
  completed,
  dependenciesCompleted: requisitesCompleted,
  onClick,
}: SkillNodeVisualProps) {
  return (
    <Button
      sx={{
        width: 200,
        height: 100,
        border: "10px solid",
        borderColor: "primary.main",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: requisitesCompleted
          ? completed
            ? "primary.main"
            : "transparent"
          : "grey",
      }}
      onClick={onClick}
      disabled={!requisitesCompleted}
    >
      <Typography>{title}</Typography>
    </Button>
  );
}
