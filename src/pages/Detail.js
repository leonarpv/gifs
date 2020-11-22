import React from "react";
import { Gif } from "@giphy/react-components";
import useDetailGifContext from "../hooks/useDetailGifContext";
import { Layout } from "../components/Layout";
import styled from "styled-components";

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  border-radius: 2em;
`;
export const Detail = () => {
  const { loading, gif } = useDetailGifContext();
  return (
    <Layout title={gif?.title}>
      <DetailWrapper>
        {loading && <div>Cargando</div>}
        {gif && <Gif gif={gif} />}
      </DetailWrapper>
    </Layout>
  );
};
