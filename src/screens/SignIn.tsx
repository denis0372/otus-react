import React from "react";
import { Login } from "@/modules";
import { ErrorBoundary } from "@/components";


export const SignIn = () => (
  <ErrorBoundary>
    <Login />
  </ErrorBoundary>
);
