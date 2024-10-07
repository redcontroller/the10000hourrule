import React, { useState, useRef } from 'react';
import Result from './Result';
import Insert from './Insert';
import { Container } from './style';

const initialValue = {
  field: '',
  hour: 0,
};

export default function Main() {
  const [state, setState] = useState(initialValue);
  const inputRefMap = useRef(new Map());
  const setInputRef = (node) => {
    if (node !== null) inputRefMap.current.set(node.name, node);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    for (const [name, value] of formData) {
      if (value === '') return inputRefMap.current.get(name)?.focus();
    }

    const newInfo = Object.fromEntries(formData.entries());

    setState(newInfo);
    if (newInfo.hour !== '0') {
      inputRefMap.current.set(
        'period',
        Math.ceil(10_000 / Number(newInfo.hour))
      );
    }

    e.currentTarget.reset();
  };

  return (
    <Container>
      {state.field === '' ? (
        <Insert onSubmit={onSubmit} setInputRef={setInputRef} />
      ) : (
        <Result state={state} inputRefMap={inputRefMap} />
      )}
    </Container>
  );
}
