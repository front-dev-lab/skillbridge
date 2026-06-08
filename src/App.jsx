import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

// Styles
import './App.scss';

// Hooks
import { useScrollToTop } from './hooks/useScrollToTop';

// Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CoursePage } from './pages/CoursePage';
import { AboutPage } from './pages/AboutPage';
import { PricingPage } from './pages/PricingPage';
import { AuthPage } from './pages/AuthPage';
import { NotFoundPage } from './pages/NotFoundPage';

// Components
import { Header } from './components/Header';
import { Menu } from './components/Menu';
import { Footer } from './components/Footer';

export const App = () => {
  const [menuIsOpened, setMenuIsOpened] = useState(false);

  useScrollToTop();

  const toggleMenu = () => {
    setMenuIsOpened(!menuIsOpened);
  };

  const closeMenu = () => {
    setMenuIsOpened(false);
  };

  return (
    <div className="App">
      <Header
        className="App__Header"
        menuIsOpened={menuIsOpened}
        toggleMenu={toggleMenu}
      />

      <Menu
        className={menuIsOpened ? 'App__Menu App__Menu--Active' : 'App__Menu'}
        closeMenu={closeMenu}
      />

      <Routes>
        <Route index element={<HomePage className="App__Content" />} />

        <Route path="courses">
          <Route index element={<CoursesPage className="App__Content" />} />

          <Route path=":name" element={<CoursePage className="App__Content" />} />
        </Route>

        <Route path="about-us" element={<AboutPage className="App__Content" />} />

        <Route path="pricing" element={<PricingPage className="App__Content" />} />

        <Route path="sign-up" element={<AuthPage className="App__Content" />} />

        <Route path="login" element={<AuthPage className="App__Content" />} />

        <Route path="*" element={<NotFoundPage className="App__Content" />} />
      </Routes>

      <Footer />
    </div>
  );
};
