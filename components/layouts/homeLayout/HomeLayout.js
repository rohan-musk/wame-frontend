import React, { useEffect } from 'react';
import instance from '@lib/utils/AxiosInstance';
import Router, { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '@lib/redux/auth/auth.action';
import {
  HomeContainer,
  HomeButton,
  HomeTitle,
  HomeTitleWame,
  HomeText,
  HomeBlob,
} from './HomeLayout.styled';
const HomeLayout = () => {
  const loginRouter = useRouter();
  const dispatch = useDispatch();

  const {
    query: { message },
  } = loginRouter;
  const handleCallbackResponse = async (response) => {
    // console.log(response.credential);
    await instance
      .get('/auth/googleLogin/', {
        withCredentials: true,
        params: {
          tokenId: response.credential,
        },
      })
      .then((res) => {
        dispatch(
          loginSuccess(
            res.data.access_token,
            res.data.refresh_token,
            res.data.username
          )
        );
        Router.push('/select');
      });
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
