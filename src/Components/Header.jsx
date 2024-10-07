import React from 'react';
import styled, { keyframes } from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: fit-content;
`;
const move = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    `;
const H1 = styled.h1``;
const Logo = styled.div`
  width: 60rem;
  margin: 0 auto;
  padding: 5rem 0 5rem 0;
  position: relative;

  &::after {
    content: '';
    display: inline-block;
    width: 20vw;
    max-width: 20rem;
    background-image: url('/img/logo-back.png');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    animation: ${move} 15s linear infinite;
    aspect-ratio: 1/1;

    position: absolute;
    top: 5%;
    left: 35%;
  }
`;
const ImgLogo = styled.img`
  display: block;
  width: 60vw;
  max-width: 60rem;
  margin: 0 auto;
`;
const Q = styled.q`
  display: block;
  width: fit-content;
  color: #ff7499;
  font-family: 'OTEnjoystoriesBA';
  font-size: 2.3rem;
  font-style: normal;
  margin: 0 auto 4.4rem;
`;
const P = styled.p`
  font-size: 2rem;
  font-weight: 500;
  text-align: center;
`;
const Strong = styled.strong`
  font-size: 2.2rem;
`;

export default function Header() {
  return (
    <Container>
      <H1 className="a11y-hidden">1만 시간의 법칙 계산기</H1>
      <Logo>
        <ImgLogo src="/img/logo.png" alt="페이지 로고" />
      </Logo>
      <Q>연습은 어제의 당신보다 당신을 더 낫게 만든다.</Q>
      <P>
        <Strong>1만 시간의 법칙은</Strong>
        <br />
        어떤 분야의 전문가가 되기 위해서는
        <br />
        최소한 1만 시간의 훈련이 필요하다는 법칙이다.
      </P>
    </Container>
  );
}
