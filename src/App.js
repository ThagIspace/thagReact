// App.js
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ANM from './Pages/ANM';
import PTPM from './Pages/PTPM';
import TKDH from './Pages/TKDH';
import CEH from './Pages/CEH';
import AWS from './Pages/AWS';
import Main from './Pages/Main';
import Regisform from './components/Regisform';
import ScrollToTop from './components/ScrollToTop';
import NotFound from './Pages/NotFound';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/anm" element={<ANM />} />
          <Route path="/ptpm" element={<PTPM />} />
          <Route path="/tkdh" element={<TKDH />} />
          <Route path="/ceh" element={<CEH />} />
          <Route path="/aws" element={<AWS />} />
          <Route path="/register" element={<Regisform />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
