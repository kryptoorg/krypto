import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Home from './pages/Home';
// import Login from './pages/Login';
//import NotFound from './pages/NotFound';

import './styles/global.css';
import './styles/pages/App.css';

function App() {
  const [redirectToLogin, setRedirectToLogin] = useState(false);

  useEffect(() => {

    const timer = setTimeout(() => {
      setRedirectToLogin(true);
    }, 60000);
    return () => clearTimeout(timer);
  }, []);

  if (redirectToLogin) {
    return <Navigate to="/login" replace />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
