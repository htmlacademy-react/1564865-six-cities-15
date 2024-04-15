import { useRef, FormEvent, useState, FocusEvent, ChangeEvent, useEffect, MouseEvent, useCallback, useMemo } from 'react';
import { Navigate, useNavigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Logo from '../../components/logo/logo';

import { AppRoute, CitiesMap, EMAIL_REGEX, PASSWORD_REGEX } from '../../const';

import { fetchOffersAction, loginAction } from '../../store/api-action';
import { getAutorisationStatus } from '../../store/user-process/selectors';
import { setActiveCity } from '../../store/app-process/app-process';

import { useAppDispatch, useAppSelector } from '../../hooks';
import { checkAuthorizationStatus } from '../../utils/utils';

function Login(): JSX.Element {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email не может быть пустым');
  const [passwordError, setPasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setFormValid] = useState(false);

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isLogged = checkAuthorizationStatus(authorizationStatus);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const randomCity = useMemo(() => CitiesMap[Math.floor(Math.random() * CitiesMap.length)], []);

  const handleRandomCityClick = useCallback((evt: MouseEvent<HTMLAnchorElement>) => {
    evt.preventDefault();

    dispatch(setActiveCity(randomCity));
    navigate(AppRoute.Root);
  }, [dispatch, navigate, randomCity]);

  if (isLogged) {
    return <Navigate to={AppRoute.Root}></Navigate>;
  }

  function handleBlur(evt: FocusEvent<HTMLInputElement>) {
    switch (evt.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  }

  function handleEmailChange(evt: ChangeEvent<HTMLInputElement>) {
    setEmail(evt.target.value);

    if (!EMAIL_REGEX.test(String(evt.target.value).toLocaleLowerCase())) {
      setEmailError('Email не корректен');
    } else {
      setEmailError('');
    }
  }

  function handlePasswordChange(evt: ChangeEvent<HTMLInputElement>) {
    setPassword(evt.target.value);

    if (!PASSWORD_REGEX.test(String(evt.target.value).toLocaleLowerCase())) {
      setPasswordError('Пароль не корректен');
    } else {
      setPasswordError('');
    }
  }

  function handleFormSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    dispatch(loginAction({
      email: email,
      password: password
    })).then((response) => {
      if (response.meta.requestStatus === 'fulfilled') {
        dispatch(fetchOffersAction());
      }
    });
  }

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <Logo />
            </div>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <Helmet>
          <title>{'6 cities - Login'}</title>
        </Helmet>
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form
              className="login__form form"
              action=""
              onSubmit={handleFormSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                {(emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>)}
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={email}
                  onBlur={handleBlur}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                {(passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>)}
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                  value={password}
                  onBlur={handleBlur}
                  onChange={handlePasswordChange}
                />
              </div>
              <button
                className="login__submit form__submit button"
                type="submit"
                disabled={!formValid}
              >
                Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <Link
                className="locations__item-link"
                to={'/'}
                onClick={handleRandomCityClick}
              >
                <span>{randomCity.name}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
