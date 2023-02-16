import FormContainer from '@/components/LoginJoinContainer';
import { useEffect, useState } from 'react';

import useValidation from './../../hooks/validation';

const Index = () => {
  const [valid, setValid] = useState(false);
  console.log(valid);
  const {
    email,
    nickName,
    password,
    emailValid,
    passwordValid,
    pwConfrimBoolean,
    onChangeEmail,
    onChangeNickName,
    onChangePassword,
    onChangePasswordConfirm,
  } = useValidation();

  useEffect(() => {
    const validCheck = emailValid && passwordValid && pwConfrimBoolean;
    validCheck ? setValid(true) : setValid(false);
  }, [emailValid, passwordValid, pwConfrimBoolean]);

  function submitJoinForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <FormContainer>
      <form onSubmit={submitJoinForm}>
        <input
          onChange={onChangeEmail}
          type="email"
          value={email}
          required
          placeholder="emailId"
        ></input>
        <input
          onChange={onChangeNickName}
          type="text"
          value={nickName}
          required
          placeholder="nickname"
        ></input>
        <input
          onChange={onChangePassword}
          type="password"
          value={password}
          required
          placeholder="pw"
        ></input>
        <input
          onChange={onChangePasswordConfirm}
          type="password"
          required
          placeholder="pwConfirm"
        ></input>
        <button disabled={!valid}>회원가입</button>
      </form>
    </FormContainer>
  );
};

export default Index;
