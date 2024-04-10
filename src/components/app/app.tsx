import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from '../protected-route/protected-route';

import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading-screen';
import Error from '../../pages/error/error';

import { getErrorStatus,getIsOffersDataLoading } from '../../store/data-process/selectors';
import { getAutorisationStatus } from '../../store/user-process/selectors';

import { AppRoute, AuthorizationStatus } from '../../const';
import ScrollToTop from '../../utils/scroll-to-top/scroll-to-top';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const hasError = useAppSelector(getErrorStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasError) {
    return (
      <Error />);
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path={AppRoute.Root}
            element={<MainPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <ProtectedRoute
                authorizationStatus={authorizationStatus}
                redirectTo={AppRoute.Login}
              >
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route
            path={AppRoute.Login}
            element={<Login />}
          />
          <Route
            path={`${AppRoute.Offer}/:id`}
            element={<Offer />}
          />
          <Route
            path='*'
            element={<NotFoundPage />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
