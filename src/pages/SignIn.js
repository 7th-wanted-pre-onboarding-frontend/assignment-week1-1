import React, { useState, useMemo, useCallback } from 'react';
// import { useNavigate } from 'react-router-dom';
import { emailRegex, passwordRegex } from '../utils/Constants';
import AuthService from '../utils/Auth.service';
import LocalStorageService from '../utils/LocalStorage.service';

function SignIn() {
  // const navigate = useNavigate();
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

  const signUpHandler = useCallback(async (e) => {
    e.preventDefault();

    await AuthService.join({
      email,
      password
    })
      .then((response) => {
        console.log(response.data);
        alert('회원가입 성공!');
      })
      .catch((error) => {
        console.log(error);
        alert('회원가입에 실패하였습니다');
      })[(email, password)];
  });

  const logInHandler = useCallback(
    async (e) => {
      e.preventDefault();

      try {
        const {
          data: { access_token: accessToken }
        } = await AuthService.login({
          email,
          password
        });

        const token = {
          value: accessToken,
          expiredTime: Date.now()
        };

        LocalStorageService.set('token', token);
        // navigate('/todo', {
        //   replace: true
        // });
        alert('로그인에 성공하였습니다.');
      } catch (error) {
        console.log(error);
        alert('로그인에 실패하였습니다.');
      }
    },
    [email, password]
  );

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
        <form onSubmit={signUpHandler}>
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
          <button type="submit" disabled={isSubmitted}>
            제출하기
          </button>
        </form>
      ) : (
        <form onSubmit={logInHandler}>
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
          <button type="submit" disabled={isSubmitted}>
            제출하기
          </button>
        </form>
      )}
    </section>
  );
}

export default SignIn;
