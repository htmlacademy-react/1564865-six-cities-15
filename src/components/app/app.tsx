import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import ProtectedRoute from '../protected-route/protected-route';

import MainPage from '../../pages/main-page/main-page';
import Favorites from '../../pages/favorites/favorites';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import { useAppSelector } from '../../hooks';
import LoadingScreen from '../../pages/loading-screen/loading';
import ErrorOffers from '../../pages/error-offers/error-offers';

import { getErrorOffersStatus, getIsOffersDataLoading } from '../../store/data-process/selectors';
import { getAutorisationStatus } from '../../store/user-process/selectors';

import { AppRoute, AuthorizationStatus } from '../../const';
import ScrollToTop from '../../utils/scroll-to-top/scroll-to-top';

function App(): JSX.Element {

  const authorizationStatus = useAppSelector(getAutorisationStatus);

  const isOffersDataLoading = useAppSelector(getIsOffersDataLoading);
  const hasErrorOffers = useAppSelector(getErrorOffersStatus);

  if (authorizationStatus === AuthorizationStatus.Unknown || isOffersDataLoading) {
    return (
      <LoadingScreen />
    );
  }

  if (hasErrorOffers) {
    return (
      <ErrorOffers />);
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
