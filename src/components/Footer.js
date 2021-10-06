import React from 'react';
import styled from "@emotion/styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        crafted with 🤍 by myself
      </p>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-top: 15px;
  color: #9b9b9b;

  p, a {
    font-size: 1.6rem;
  }

  a {
    color: #9b9b9b;
  }

  a:hover {
    text-decoration: underline;
    transition: 0.3s ease all;
    color: #212529;
  }
`
