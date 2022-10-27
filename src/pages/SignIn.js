import React, { useState, useMemo } from 'react';
import { emailRegex, passwordRegex } from '../utils/Constants';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [signupMode, setSignUpMode] = useState(true);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const authModeHandler = () => {
    setSignUpMode(!signupMode);
  };

  const error = useMemo(() => {
    const errors = {
      email: '',
      password: ''
    };

    if (!email || emailRegex.test(email.trim())) {
      errors.email = '';
    } else {
      errors.email = '이메일 형식으로 입력해주세요.';
    }

    if (!password || passwordRegex.test(password.trim())) {
      errors.password = '';
    } else {
      errors.password =
        '8자 이상의 숫자 + 대소문자로 구성된 비밀번호를 입력해주세요.';
    }
    return errors;
  }, [email, password]);

  const isSubmitted = useMemo(
    () => !!(!email || !password || error.email || error.password),
    [email, password, error]
  );

  return (
    <section>
      <button type="button" onClick={authModeHandler}>
        {signupMode ? '로그인하기' : '회원가입하기'}
      </button>
      {signupMode ? (
        <form>
          <h2>회원가입</h2>
          <label htmlFor="email">
            이메일
            <input id="email" type="text" onChange={emailChangeHandler} />
          </label>
          <p>{error.email}</p>
          <label htmlFor="password">
            패스워드
            <input
              id="password"
              type="password"
              onChange={passwordChangeHandler}
            />
          </label>
          <p>{error.password}</p>
          <button type="button" disabled={isSubmitted}>
            제출하기
          </button>
        </form>
      ) : (
        <form>
          <h2>로그인</h2>
          <label htmlFor="email">
            이메일
            <input id="email" type="text" onChange={emailChangeHandler} />
          </label>
          <p>{error.email}</p>
          <label htmlFor="password">
            패스워드
            <input
              id="password"
              type="password"
              onChange={passwordChangeHandler}
            />
          </label>
          <p>{error.email}</p>
          <button type="button" disabled={isSubmitted}>
            제출하기
          </button>
        </form>
      )}
    </section>
  );
}

export default SignIn;
