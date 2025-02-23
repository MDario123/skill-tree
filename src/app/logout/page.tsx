import { redirect } from "next/navigation";

import { createServerClient } from "#shared/services/supabase";

export default async function Page() {
  const supabase = await createServerClient();

  {
    const { data, error } = await supabase.auth.getUser();
    if (error || !data?.user) {
      redirect("/login");
    }
  }

  const { error } = await supabase.auth.signOut();
  if (error) {
    redirect("/error");
  }

  redirect("/");

  return null;
}
