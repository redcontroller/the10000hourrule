import { Btn, BtnWrap, Form, FormContent, ImgClick, P } from './style';

export default function Insert({ onSubmit, setInputRef }) {
  return (
    <Form onSubmit={onSubmit}>
      <FormContent>
        <P>
          나는
          <input
            ref={setInputRef}
            name="field"
            type="text"
            placeholder="ex. 프로그래머"
            required
            style={{ width: '30rem' }}
          />
          전문가가 될 것이다.
        </P>
        <P>
          그래서 앞으로 매일 하루에
          <input
            ref={setInputRef}
            name="hour"
            type="number"
            placeholder="ex. 10"
            required
            style={{ width: '15rem' }}
          />
          시간씩 훈련할 것이다.
        </P>
      </FormContent>
      <BtnWrap>
        <Btn type="submit">나는 며칠 동안 훈련을 해야 1만 시간이 될까?</Btn>
        <ImgClick src="/img/click_hand.png" alt="클릭하여 훈련일 수 계산하기" />
      </BtnWrap>
    </Form>
  );
}
