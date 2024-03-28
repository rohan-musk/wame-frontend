import React from 'react';
import {
  HomeContainer,
  HomeButton,
  HomeTitle,
  HomeTitleWame,
  HomeText,
  HomeBlob,
} from './HomeLayout.styled';
const HomeLayout = () => {
  return (
    <HomeContainer>
      <HomeTitle>
        Welcome to
        <br /> <HomeTitleWame>WaMe</HomeTitleWame>
      </HomeTitle>
      <HomeText>
        Want to hire, but don't like going through thousands of resumes? <br />
        We will do it for you!
      </HomeText>
      <HomeButton href='/login'>Login</HomeButton>
      <HomeBlob></HomeBlob>
    </HomeContainer>
  );
};

export default HomeLayout;
