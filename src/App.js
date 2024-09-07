import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/header';
import Home from './pages/home/home';
import About from './pages/about/about';
import AksenExclusive from './pages/Aksen Exclusive/aksenExclusive';
import Contact from './pages/contact/contact';
import Blog from './pages/blog/blog';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';

function AppRoutes() {
  const routes = useRoutes([
    { path: '/construction', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/aksenExclusive', element: <AksenExclusive/> },
    { path: '/contact', element: <Contact /> },
    { path: '/blog', element: <Blog /> },
  ]);
  return routes;
}

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
    </Router>
  );
}

export default App;
