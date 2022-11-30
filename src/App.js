import HomeLinks from "./components/Links/HomeLinks";
import DataProvider from "./components/Context/DataContext";
import Jobs from "./components/Jobs/Jobs";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeLinks />} />
          <Route path='/Mentoring&Freelancer' element={<Jobs />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
