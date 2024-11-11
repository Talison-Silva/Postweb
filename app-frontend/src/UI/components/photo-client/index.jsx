import { AuthContext } from "@/app/contexts/AuthContext.tsx";
import styled from "styled-components";
import { Children, useContext } from "react";

export default ({ classN, client }) => {
  const { isClient } = useContext(AuthContext);

  const Photo = styled.div`
    background: url("${import.meta.env
      .VITE_BASE_URL_API}/static/photo-perfil/${isClient.photo}");
    background-size: cover;
    background-position: center;
  `;

  return (
    <Photo className={classN}>
      <div className="w-10 h-10 bg-black">{children}</div>
    </Photo>
  );
};
