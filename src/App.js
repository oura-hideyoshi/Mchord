
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, Test } from "./Component/pages";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>

          </Route>
          <Route path="/test" element={<Test />}>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
