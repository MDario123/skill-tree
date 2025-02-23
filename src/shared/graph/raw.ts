import { Edge, Node } from "@xyflow/react";
import { SkillNode } from "./render";

export const nodeTypes = {
  skill: SkillNode,
};

export const nodes: Node[] = [
  { id: "1", type: "skill", position: { x: 0, y: 0 }, data: { title: "1" } },
  { id: "2", type: "skill", position: { x: 300, y: 0 }, data: { title: "2" } },
];

export const edges: Edge[] = [{ id: "e1-2", source: "1", target: "2" }];
