"use client";

import type { JSX } from "react";
import { useCallback, useState } from "react";
import { Container, Typography } from "@mui/material";
import {
  applyNodeChanges,
  Node,
  NodeChange,
  ReactFlow,
  ReactFlowProvider,
  Viewport,
} from "@xyflow/react";

import { useGraphContext } from "#shared/services/graph";
import "@xyflow/react/dist/style.css";
import { CheckpointNode, nodeTypes, SkillNode } from "#shared/graph";

const FIXED_Y = 0;

function calculateBoundaries(nodes: Node[]): { minX: number; maxX: number } {
  return {
    minX: -Math.max(
      ...nodes.map((node) => node.position.x + (node.width || 0)),
    ),
    maxX: Math.min(...nodes.map((node) => node.position.x)),
  };
}

function Graph(): JSX.Element {
  const { isFetching, nodes, setNodes, edges } = useGraphContext();

  const onNodesChange = useCallback(
    (changes: NodeChange<SkillNode | CheckpointNode>[]) => {
      setNodes((nodes) => applyNodeChanges(changes, nodes));
    },
    [setNodes],
  );

  const [currentViewport, setCurrentViewport] = useState({
    x: 10,
    y: FIXED_Y,
    zoom: 1,
  });

  const { minX, maxX } = calculateBoundaries(nodes);

  const handleViewportChange = useCallback(
    (newViewport: Viewport) => {
      // Clamp X position between boundaries
      const clampedX = Math.min(Math.max(newViewport.x, minX), maxX);

      // Maintain fixed Y position
      const constrainedViewport = {
        ...newViewport,
        x: clampedX,
        y: FIXED_Y,
        zoom: 1, // Maintain fixed zoom if needed
      };

      setCurrentViewport(constrainedViewport);
    },
    [setCurrentViewport, minX, maxX],
  );

  if (isFetching) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        viewport={currentViewport}
        onViewportChange={handleViewportChange}
        panOnDrag={false}
        elementsSelectable={true} // Allow node interaction
        nodesConnectable={false}
        nodesDraggable={false}
      />
    </Container>
  );
}

export default function Page(): JSX.Element {
  return (
    <ReactFlowProvider>
      <Graph />
    </ReactFlowProvider>
  );
}
