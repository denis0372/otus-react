import React, { ReactNode, FC } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { AppState } from '@/rdx/reducer'; 
import { CheckState } from "@/modules/Login/slice";

const mapStateToProps = ({ login }: AppState) => ({
  ...login,
});

export interface Props extends ReturnType<typeof mapStateToProps> {
  children: ReactNode;
  redirectPath?: string;
}

export const AccessCheckerComponent: FC<Props> = ({
  children,
  status,
  redirectPath = "/login",
}) => {
  if (status === CheckState.initiated) {
    return <div>Checking if user is authorized...</div>;
  }

  if (status === CheckState.failed) {
    return <Redirect to={redirectPath} />;
  }

  return <>{children}</>;
};

export const AccessChecker = connect(mapStateToProps)(AccessCheckerComponent);
