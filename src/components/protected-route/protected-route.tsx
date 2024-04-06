import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';

type TProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
  component?: boolean;
};

function ProtectedRoute(props: TProtectedRouteProps): JSX.Element {
  const { authorizationStatus, children, redirectTo, component } = props;

  if (component) {
    return (authorizationStatus === AuthorizationStatus.NoAuth)
      ? <Navigate to={redirectTo} /> : children;
  }

  return (
    authorizationStatus === AuthorizationStatus.NoAuth
      ? children
      : <Navigate to={redirectTo}/>
  );
}

export default ProtectedRoute;
