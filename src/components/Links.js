import React from 'react';
import styled from "@emotion/styled";

import LinkItem from './LinkItem';

const Links = ({ links }) => {
  // console.log(links);
  return (
    <StyledContent>
      <ul>
        {links.map(link => (
          <LinkItem key={link.url} link={link} />
        ))}
      </ul>
    </StyledContent>
  );
};

export default Links;

const StyledContent = styled.div`
  width: 90%;
  max-width: 480px;
  margin: 0 auto;
`