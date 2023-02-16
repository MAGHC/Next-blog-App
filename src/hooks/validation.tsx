import { useState } from 'react';

export default function useValidation() {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');
  const [passwodConfirmValue, setPasswordConFirmValue] = useState('');
  const [passwordValid, setPasswordValid] = useState(false);
  const [pwConfrimBoolean, setPwConfrimBoolean] = useState(false);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    const EMAILREG =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

    const checkEmail = value.match(EMAILREG);

    checkEmail ? setEmailValid(true) : setEmailValid(false);
  };

  const onChangeNickName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setNickName(value);
  };

  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    const checkPw = value.length > 6;

    checkPw ? setPasswordValid(true) : setPasswordValid(false);
  };

  const onChangePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setPasswordConFirmValue(value);

    const checkpw = value === password;
    console.log(pwConfrimBoolean);
    checkpw ? setPwConfrimBoolean(true) : setPwConfrimBoolean(false);
  };

  return {
    password,
    email,
    nickName,
    passwordValid,
    emailValid,
    onChangeEmail,
    onChangePassword,
    onChangePasswordConfirm,
    pwConfrimBoolean,
    onChangeNickName,
  };
}
