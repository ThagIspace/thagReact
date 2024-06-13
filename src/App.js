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
      <Router basename=''>
        <ScrollToTop />
        <Routes>
          <Route path="/thagReact/" element={<Main />} />
          <Route path="/thagReact/anm" element={<ANM />} />
          <Route path="/thagReact/ptpm" element={<PTPM />} />
          <Route path="/thagReact/tkdh" element={<TKDH />} />
          <Route path="/thagReact/ceh" element={<CEH />} />
          <Route path="/thagReact/aws" element={<AWS />} />
          <Route path="/thagReact/register" element={<Regisform />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/thagReact/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
