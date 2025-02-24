import { createBrowserClient as supabaseCreateBrowserClient } from "@supabase/ssr";
import { Database } from "./database.types";

export function createBrowserClient() {
  return supabaseCreateBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}
