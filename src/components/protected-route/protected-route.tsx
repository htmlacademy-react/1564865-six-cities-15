import { Navigate } from 'react-router-dom';

import { AppRoute, AuthorizationStatus } from '../../const';
import { checkAuthorizationStatus } from '../../utils/utils';

type TProtectedRouteProps = {
  authorizationStatus: AuthorizationStatus;
  redirectTo: AppRoute;
  children: JSX.Element;
};

function ProtectedRoute(props: TProtectedRouteProps): JSX.Element {
  const { authorizationStatus, children, redirectTo } = props;

  const isLogged = checkAuthorizationStatus(authorizationStatus);

  return (
    isLogged ? children : <Navigate to={redirectTo} />
  );
}

export default ProtectedRoute;
