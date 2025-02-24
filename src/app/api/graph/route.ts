import { createServerClient } from "#shared/services/supabase";

export async function GET(): Promise<Response> {
  const supabase = await createServerClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  const { data: queryNodesData, error: queryNodesError } = await supabase
    .from("nodes")
    .select(
      `
    node_id,
    title,
    ...nodetypes!inner(
      type:name
    )
    `,
    );

  if (queryNodesError || queryNodesData === null) {
    return new Response(null, { status: 500 });
  }

  const { data: queryEdgesData, error: queryEdgesError } = await supabase
    .from("edges")
    .select(
      `
    edge_id,
    source_node_id,
    target_node_id
    `,
    );

  if (queryEdgesError || queryEdgesData === null) {
    return new Response(null, { status: 500 });
  }

  const nodes = queryNodesData.map((node) => ({
    id: node.node_id,
    type: node.type,
    position: { x: 0, y: 0 },
    data: { title: node.title },
  }));

  const edges = queryEdgesData.map((edge) => ({
    id: edge.edge_id,
    source: edge.source_node_id,
    target: edge.target_node_id,
  }));

  return new Response(JSON.stringify({ nodes, edges }));
}
