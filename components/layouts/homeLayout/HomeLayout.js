import React, { useEffect } from 'react';
import {
  HomeContainer,
  HomeButton,
  HomeTitle,
  HomeTitleWame,
  HomeText,
  HomeBlob,
} from './HomeLayout.styled';
const HomeLayout = () => {
  const handleCallbackResponse = async (response) => {
    console.log(response);
  };
  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse,
    });

    google.accounts.id.renderButton(document.getElementById('signInDiv'), {
      theme: 'outline',
      size: 'large',
    });

    google.accounts.id.prompt();
  }, []);

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
      <HomeBlob></HomeBlob>

      <div id='signInDiv'></div>
    </HomeContainer>
  );
};

export default HomeLayout;
