"use client";

import { Edge } from "@xyflow/react";
import type { Dispatch, JSX, SetStateAction } from "react";
import { createContext, useContext, useEffect, useState } from "react";
import { CheckpointNode, SkillNode } from "#shared/graph";
import { useGraph } from "./queries/useGraph";
import { createBrowserClient } from "#shared/services/supabase";

interface ContextData {
  error: Error | null;
  isFetching: boolean;
  nodes: (SkillNode | CheckpointNode)[];
  edges: Edge[];
}

interface ContextFull extends ContextData {
  setNodes: Dispatch<SetStateAction<(SkillNode | CheckpointNode)[]>>;
  setEdges: Dispatch<SetStateAction<Edge[]>>;
  // setNodesCompleted: (nodes: Array<{ id: string; completed: boolean }>) => void;
}

const GraphContext = createContext<ContextFull>({
  isFetching: false,
  error: null,
  nodes: [],
  edges: [],
  setNodes: () => {},
  setEdges: () => {},
});

export function GraphContextProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [userId, setUserId] = useState<string | null>(null);
  const [nodes, setNodes] = useState<(SkillNode | CheckpointNode)[]>([]);
  const [edges, setEdges] = useState<Edge[]>([]);
  const { isFetching, error, data } = useGraph(userId);

  useEffect(() => {
    const supabase = createBrowserClient();
    supabase.auth.getSession().then(({ data: userData, error: userError }) => {
      if (userError) {
        console.error(userError);
      }

      const user = userData?.session?.user;

      setUserId(user?.id ?? null);
    });
  }, []);
  // TODO: get user id on change

  useEffect(() => {
    if (data) {
      setNodes(data.nodes);
      setEdges(data.edges);
    }
  }, [data]);

  const value: ContextFull = {
    error,
    isFetching,
    nodes,
    edges,
    setNodes,
    setEdges,
  };

  console.log("GraphContextProvider", value);

  return (
    <GraphContext.Provider value={value}>{children}</GraphContext.Provider>
  );
}

export function useGraphContext(): ContextFull {
  const context = useContext(GraphContext);
  return context;
}
