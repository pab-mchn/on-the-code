import HomeLinks from "./components/Links/HomeLinks";
import DataProvider from "./components/Context/DataContext";

function App() {
  return (
    <DataProvider>
      <HomeLinks />
    </DataProvider>
  );
}

export default App;
