import styled from 'styled-components';
import Link from 'next/link';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
export const HomeButton = styled(Link)`
  font-weight: 500;
  font-size: 1.5em;
  background: #0f9d58;
  color: #fff;
  padding: 10px 50px;
  border-radius: 10px;
  margin-bottom: 100px;
  @media (max-width: 750px) {
    font-size: 1em;
    padding: 10px 30px;
  }
`;
export const HomeTitle = styled.div`
  font-style: normal;
  line-height: 3.5em;
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  background: linear-gradient(90deg, #ff5656 0%, #816cff 98.19%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  @media (max-width: 750px) {
    font-size: 1.5em;
    line-height: 2em;
  }
  padding: 0;
  margin: 0;
`;
export const HomeTitleWame = styled.span`
  font-size: 6em;
  @media (max-width: 1500px) {
    font-size: 4em;
  }
  @media (max-width: 750px) {
    font-size: 2.5em;
  }
`;
export const HomeText = styled.p`
  text-align: center;
  font-weight: 500;
  color: #555;
  padding: 0 40px;
  padding-bottom: 10px;
`;
export const HomeBlob = styled.div`
  top: 50vh;
  z-index: -1;
  position: fixed;
  min-width: 1000px;
  min-height: 1000px;
  background: radial-gradient(
    50% 50% at 50% 50%,
    rgba(129, 108, 255, 0.3) 0%,
    rgba(206, 151, 249, 0.3) 33.33%,
    rgba(245, 187, 199, 0.3) 66.67%,
    rgba(255, 255, 255, 0.3) 100%
  );
`;
