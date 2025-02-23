import { Node } from "@xyflow/react";

type CheckpointNodeData = {
  title: string;
  completed?: boolean;
};

type SkillNodeData = CheckpointNodeData;

type CheckpointNode = Node<CheckpointNodeData, "checkpoint">;
type SkillNode = Node<SkillNodeData, "skill">;

export type { CheckpointNode, SkillNode };
