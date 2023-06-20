import Register from './pages/Register';
import UserDetails from './pages/UserDetails';
import { Toaster } from 'react-hot-toast'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Navigate } from 'react-router-dom';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <>
      <BrowserRouter>
        <Toaster position='top-center' />
        <Routes>
          <Route path='/' element={<Navigate to="/userDetails" />} />
          <Route path='/userDetails' element={<UserDetails />} />
          <Route path='/register' element={<Register />} />
          <Route path='/profile' element={<UserProfile />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;