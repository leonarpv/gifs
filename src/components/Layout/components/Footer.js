import React from "react";
import styled from "styled-components";
const Subject = styled.div`
  text-align: center;
`;
const Footer = () => (
  <footer>
    <Subject>©{new Date().getFullYear()} | leonarpv</Subject>
  </footer>
);

export default Footer;
