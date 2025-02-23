import { useNodeConnections, useNodesData } from "@xyflow/react";

/**
 * Custom hook to determine if all dependencies of a given node are completed.
 *
 * @param {string} id - The ID of the node to check.
 * @returns {boolean} - True if all connected source nodes (dependencies) are completed, false otherwise.
 */
export function useDependenciesCompleted(id: string): boolean {
  const dependencyNodes = useNodeConnections({ id, handleType: "target" }).map(
    (c) => c.source,
  );
  const dependenciesCompleted = useNodesData(dependencyNodes).every(
    (n) => n.data.completed,
  );

  return dependenciesCompleted;
}
