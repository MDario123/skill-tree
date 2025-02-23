"use client";

import { useCallback, useState, type JSX } from "react";
import { edges as initEdges, nodes as initNodes } from "#shared/graph";
import { Container } from "@mui/material";
import {
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  Viewport,
} from "@xyflow/react";

import "@xyflow/react/dist/style.css";
import { nodeTypes } from "../../shared/graph/raw";

const FIXED_Y = 0;

const calculateBoundaries = () => {
  return {
    minX: -Math.max(
      ...initNodes.map((node) => node.position.x + (node.width || 0)),
    ),
    maxX: Math.min(...initNodes.map((node) => node.position.x)),
  };
};

function Graph(): JSX.Element {
  const [nodes, , onNodesChange] = useNodesState(initNodes);
  const [edges, , onEdgesChange] = useEdgesState(initEdges);
  const [currentViewport, setCurrentViewport] = useState({
    x: 10,
    y: FIXED_Y,
    zoom: 1,
  });

  const { minX, maxX } = calculateBoundaries();

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
    [setCurrentViewport],
  );

  return (
    <Container sx={{ width: "100%", height: "100%", overflow: "hidden" }}>
      <ReactFlow
        nodeTypes={nodeTypes}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
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
