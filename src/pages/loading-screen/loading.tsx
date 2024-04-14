import './loading.css';

function Loading(): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="spinner-wrapper">
                <p>Loading...</p>
                <div className="spinner"></div>
              </div>
            </section>
            <div className="cities__right-section"></div>
          </div>
        </div>
      </main >
    </div >
  );
}

export default Loading;
