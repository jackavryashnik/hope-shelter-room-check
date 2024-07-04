import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import RootRouting from '../routers/RootRouting';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <>
      <RootRouting />
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rooms" element={<RoomsPage />} />
          <Route
            path="/:authType"
            element={
              <RestrictedRoute redirectTo="/" component={<AuthPage />} />
            }
          />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense> */}
    </>
  );
}

export default App;
