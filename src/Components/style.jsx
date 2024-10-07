import styled from 'styled-components';

const Container = styled.main``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
`;
const P = styled.p`
  font-size: 2.4rem;
  font-weight: 500;
  text-align: center;
`;
const BtnWrap = styled.div`
  position: relative;
  margin-bottom: 5rem;
`;
const Btn = styled.button``;
const ImgClick = styled.img`
  width: 10rem;
  max-width: 7rem;
  position: absolute;
  top: 20px;
`;
const FormContent = styled.div`
  height: 38vh;
  min-height: 120px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;
const Strong = styled.strong`
  font-size: 6rem;
  vertical-align: middle;
  padding: 0 2rem;
`;
const BtnShare = styled.button`
  background-color: white;
  margin-left: 2rem;
`;

export {
  Container,
  Form,
  P,
  BtnWrap,
  ImgClick,
  Btn,
  FormContent,
  Strong,
  BtnShare,
};
