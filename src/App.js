import HomeLinks from "./components/Links/HomeLinks";
import DataProvider from "./components/Context/DataContext";
import Jobs from "./components/Jobs/Jobs";
import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <HashRouter>
        <Routes>
          <Route path='/' element={<HomeLinks />} />
          <Route path='/Mentoring&Freelancer' element={<Jobs />} />
        </Routes>
      </HashRouter>
    </DataProvider>
  );
}

export default App;
