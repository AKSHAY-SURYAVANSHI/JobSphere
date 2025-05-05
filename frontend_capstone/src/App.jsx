import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import Apply from './components/Apply/Apply';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import JobCardList from './pages/JobCardList';
import ApplyPage from './pages/ApplyPage';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <BrowserRouter>
    <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/jobcardlist" element={<JobCardList />} />
        <Route path="/apply" element={<ApplyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;