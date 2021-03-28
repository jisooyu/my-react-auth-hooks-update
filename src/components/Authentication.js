import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UploadTodos from "./UploadTodos";

export const Authentication = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <div className="content-container">
          <div style={{ textAlign: "center", marginBotton: 30 }}>
            <img src={user.picture} alt={user.name} />
            <p>{user.name}</p>
            <p>{user.email}</p>
          </div>
        </div>
        <UploadTodos />
      </>
    )
  );
};
