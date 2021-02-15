import React, { FC } from "react";
import { AccessChecker, Conditions } from "@/modules";
import { ErrorBoundary } from "@/components";

export const ConditionsScreen: FC<{}> = () => (
  <ErrorBoundary>
    <AccessChecker>
      <Conditions />
    </AccessChecker>
  </ErrorBoundary>
);
