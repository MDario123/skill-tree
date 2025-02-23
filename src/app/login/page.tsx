import React from "react";
import { redirect } from "next/navigation";
import { createServerClient } from "#shared/services/supabase";
import { LoginForm } from "./LoginForm";

export default async function Page() {
  const supabase = await createServerClient();

  const { data, error } = await supabase.auth.getUser();
  if (data?.user && !error) {
    redirect("/");
  }

  return <LoginForm />;
}
