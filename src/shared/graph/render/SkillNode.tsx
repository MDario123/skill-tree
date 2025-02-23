import { Handle, NodeProps, Position, useReactFlow } from "@xyflow/react";
import { Box } from "@mui/material";
import { useCallback, useEffect } from "react";

import { useDependenciesCompleted } from "./helpers";
import { SkillNodeVisual } from "#design/node";
import type { SkillNode } from "../types";

export function SkillNode({ id, data }: NodeProps<SkillNode>) {
  const dependenciesCompleted = useDependenciesCompleted(id);
  const { updateNodeData } = useReactFlow();

  // Update node data if dependencies are not completed
  useEffect(() => {
    if (!dependenciesCompleted && data.completed) {
      updateNodeData(id, {
        completed: false,
      });
    }
  }, [updateNodeData, id, dependenciesCompleted, data.completed]);

  // Toggle node completion.
  // Can be marked as completed iff dependencies are completed
  const handleClick = useCallback(() => {
    if (!dependenciesCompleted) {
      return;
    }

    updateNodeData(id, {
      completed: !data.completed,
    });
  }, [updateNodeData, id, dependenciesCompleted, data.completed]);

  return (
    <Box>
      <Handle type="target" position={Position.Left} />
      <SkillNodeVisual
        title={data.title}
        completed={data.completed ?? false}
        dependenciesCompleted={dependenciesCompleted}
        onClick={handleClick}
      />
      <Handle type="source" position={Position.Right} />
    </Box>
  );
}
