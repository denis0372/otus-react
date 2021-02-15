import React from "react";

import { AccessChecker, Header as HeaderComponent } from "@/modules";

export const Header = () => (
    <AccessChecker>
        <HeaderComponent />
    </AccessChecker>
);
