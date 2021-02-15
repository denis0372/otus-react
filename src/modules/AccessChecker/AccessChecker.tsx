import React, { ReactNode, FC } from "react";
import { connect, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { AppState } from "@/rdx/reducer";
import { CheckState } from "@/modules/Login/slice";

export interface Props {
  children: ReactNode;
  redirectPath?: string;
}

export const AccessChecker: FC<Props> = ({
  children,
  redirectPath = "/login",
}) => {
  const status = useSelector(({ login }: AppState) => login.status);

  if (status === CheckState.initiated) {
    return <div>Checking if user is authorized...</div>;
  }

  if (status === CheckState.failed) {
    return <Redirect to={redirectPath} />;
  }

  return <>{children}</>;
};
