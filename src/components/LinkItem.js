import React from 'react';
import styled from "@emotion/styled";

// import { HiOutlineGlobe } from 'react-icons/hi';
// import { SiLinkedin } from 'react-icons/si';

const LinkItem = ({ link }) => {
  const { url, icon, title, openInNewTab } = link;

  return (
    <StyledList>
      {openInNewTab ? (

        <a
          target='_blank'
          href={url}
          rel='noopener noreferrer'
          className='link'
        >
          {/* <SiLinkedin size={20}/> */}
          {title}
        </a>
      ) : (
        <a href={url} className='link'>
          {title}
        </a>
      )}
    </StyledList>
  );
}

export default LinkItem;

const StyledList = styled.li`
  .link {
    display: block;
    background-color: #fff;
    color: #000;
    text-align: center;
    font-size: 17px;
    font-family: 'Karla', Helvetica, sans-serif;
    font-weight: 600;
    padding: 13px 0;
    margin: 23px 0;
    box-shadow: rgb(78 78 78) 5px 5px 0px 0px;
    border-radius: 4px;

    &:hover {
      color: #fff;
      background-color: #5f7fff;
      box-shadow: unset;
    }
  }
`
