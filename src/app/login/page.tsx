import React from "react";
import { redirect } from "next/navigation";
import { createClient } from "#shared/services/supabase/server";
import { LoginForm } from "./LoginForm";

export default async function Page() {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user && !error) {
    redirect("/");
  }

  return <LoginForm />;
}
