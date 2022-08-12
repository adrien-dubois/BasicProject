import { BrowserRouter as Router, Routes } from 'react-router-dom';
import GlobalStyles from './GlobalStyles';
import GoToTop from './GoToTop';

function App() {
  return (
    <>
      <GlobalStyles/>
      <GoToTop/>

      {/* ROUTING */}
      <Router>
        <Routes>
        </Routes>
      </Router>
    </>
  );
}

export default App;
