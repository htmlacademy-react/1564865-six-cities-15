import { Helmet } from 'react-helmet-async';

import Header from '../../components/header/header';
import Cities from '../../components/cities/cities';
import Location from '../../components/location/location';

function MainPage(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities - Main Page</title>
      </Helmet>
      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <Location />
        </div>
        <Cities />
      </main>
    </div>
  );
}

export default MainPage;
