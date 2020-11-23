import React from "react";
import GlobalLoader from "../../common/GlobalLoader";
import { Wrapper } from "./styled";
import Item from "../../common/Item";

const GifDetailLoading = GlobalLoader(Item);

export default function GifDetail({ gif = {}, loading, ...rest }) {
  return (
    <Wrapper>
      <GifDetailLoading isLoadings={loading} gif={gif} {...rest} />
    </Wrapper>
  );
}
