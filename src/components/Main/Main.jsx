import Navigat from '../Navigat/Navigat';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader';

function Main(props) {
  return (
    <div>
      <header>
        <Navigat />
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
}

export default Main;
