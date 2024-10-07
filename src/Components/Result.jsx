import { Btn, BtnShare, BtnWrap, Form, FormContent, P, Strong } from './style';

export default function Result({ state, inputRefMap }) {
  return (
    <Form>
      <FormContent>
        <P>
          당신은<Strong>{state.field}</Strong>전문가가 되기 위해서
        </P>
        <P>
          대략
          <Strong>
            {inputRefMap.current.get('period') || <span>&#8734;</span>}
          </Strong>
          일 이상 훈련하셔야 합니다! 🔥
        </P>
      </FormContent>
      <BtnWrap>
        <Btn type="submit">훈련하러 가기 GO!GO!</Btn>
        <BtnShare type="submit">공유하기</BtnShare>
      </BtnWrap>
    </Form>
  );
}
