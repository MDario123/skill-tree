import { redirect } from "next/navigation";

import { createClient } from "#shared/services/supabase/server";

export default async function Page() {
  const supabase = await createClient();

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
