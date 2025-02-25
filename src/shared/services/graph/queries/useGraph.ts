"use client";

import type { Edge } from "@xyflow/react";
import { useQuery } from "@tanstack/react-query";

import { CheckpointNode, SkillNode } from "#shared/graph";

async function getGraph(): Promise<{
  nodes: (SkillNode | CheckpointNode)[];
  edges: Edge[];
}> {
  const response = await fetch("/api/graph");

  // This deserves better error handling
  if (!response.ok) {
    throw new Error("getGraph failed");
  }

  return response.json();
}

export function useGraph(userId: string | null): {
  isFetching: boolean;
  error: Error | null;
  data: { nodes: (SkillNode | CheckpointNode)[]; edges: Edge[] } | undefined;
} {
  const { isFetching, error, data } = useQuery({
    queryKey: ["getGraph", userId],
    queryFn: () => {
      if (!userId) {
        throw new Error("User ID is not set");
      }

      return getGraph();
    },
  });

  return { isFetching, error, data };
}
