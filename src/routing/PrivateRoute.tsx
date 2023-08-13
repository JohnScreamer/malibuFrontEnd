import { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { getJwtFromCookie } from "../utils/JWT/getJWTCookie.js";
export const PrivateRoute = ({ children }: { children: ReactNode }) => {
    const token = getJwtFromCookie();
    if (!token) {
        return <Navigate to={"/"} />;
    }
    return <>{children}</>;
};
