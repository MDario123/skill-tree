"use client";

import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { Stack } from "@mui/system";
import { login, signup } from "./actions";

export function LoginForm() {
  return (
    <Box component="form" display="flex" flexDirection="column" gap={2}>
      <h1>Login or Sign Up</h1>
      <TextField name={"email"} label={"Email"} type="email" required />
      <TextField
        name={"password"}
        label={"Password"}
        type="password"
        required
      />
      <Stack direction="row" justifyContent="flex-end">
        <Button type="submit" formAction={login}>
          Login
        </Button>
        <Button type="submit" formAction={signup}>
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
}
