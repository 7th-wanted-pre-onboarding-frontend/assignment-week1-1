import React, { useState, useMemo, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { emailRegex, passwordRegex } from '../utils/Constants';
import AuthService from '../utils/Auth.service';
import LocalStorageService from '../utils/LocalStorage.service';
import PublicRoute from '../PublicRouter';
import ui from '../ui';

function SignIn() {
  const navigate = useNavigate();
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
      .then(() => {
        alert('회원가입 성공!');
      })
      .catch(() => {
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
        alert('로그인에 성공하였습니다.');
        navigate('/todo');
      } catch (error) {
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
        '8자 이상의 숫자와 대소문자로 구성된 비밀번호를 입력해주세요.';
    }
    return errors;
  }, [email, password]);

  const isSubmitted = useMemo(
    () => !!(!email || !password || error.email || error.password),
    [email, password, error]
  );

  return (
    <PublicRoute>
      <ui.AuthSection>
        {signupMode ? (
          <ui.AuthForm onSubmit={signUpHandler}>
            <ui.AuthInput
              id="email"
              type="text"
              onChange={emailChangeHandler}
              placeholder="이메일"
            />
            <ui.AuthError>{error.email}</ui.AuthError>
            <ui.AuthInput
              id="password"
              type="password"
              onChange={passwordChangeHandler}
              placeholder="비밀번호"
            />
            <ui.AuthError>{error.password.slice(0, 10)}</ui.AuthError>
            <ui.AuthError>{error.password.slice(10)}</ui.AuthError>
            <ui.AuthSubmit type="submit" disabled={isSubmitted}>
              회원가입
            </ui.AuthSubmit>
          </ui.AuthForm>
        ) : (
          <ui.AuthForm onSubmit={logInHandler}>
            <ui.AuthInput
              id="email"
              type="text"
              onChange={emailChangeHandler}
              placeholder="이메일"
            />
            <ui.AuthError>{error.email}</ui.AuthError>
            <ui.AuthInput
              id="password"
              type="password"
              onChange={passwordChangeHandler}
              placeholder="비밀번호"
            />
            <ui.AuthError>{error.password.slice(0, 10)}</ui.AuthError>
            <ui.AuthError>{error.password.slice(10)}</ui.AuthError>
            <ui.AuthSubmit type="submit" disabled={isSubmitted}>
              로그인
            </ui.AuthSubmit>
          </ui.AuthForm>
        )}
        <ui.AuthMode>
          <ui.AuthModeButton type="button" onClick={authModeHandler}>
            {signupMode ? '로그인하기' : '회원가입하기'}
          </ui.AuthModeButton>
        </ui.AuthMode>
      </ui.AuthSection>
    </PublicRoute>
  );
}

export default SignIn;
