import MainPage from '../../pages/main-page/main-page';

type NumberOfRentals = {
  offersCount: number;
}

function App({offersCount}: NumberOfRentals): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
  );
}

export default App;
