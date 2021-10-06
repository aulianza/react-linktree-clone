import React from 'react';
import styled from "@emotion/styled";

const Header = ({ header }) => {
  const { image, fullname, title } = header;

  return (
    <StyledHeader>
      <nav className='logo'>
        <img src={image.url} alt={image.alt} />
        <h1>{fullname}</h1>
        <p>{title}</p>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  nav {
    &.logo {
      text-align: center;
      padding: 5px 0 10px;

    }

    &.logo img {
      width: 96px;
      border-radius: 100%;
      border: 4px solid #4e4e4e;
    }

    &.logo h1 {
      font-size: 23px;
      font-weight: 500;
      margin: 25px 0 5px;
    }

    &.logo p {
      font-size: 17px;
      font-weight: 500;

    }
  }
`;
