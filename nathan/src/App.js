import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from'./components/header';
import AppSlide from './components/slide';
import AppAbout from './components/about';
import AppService from './components/service';
import AppBlog from './components/blog';
import AppContact from './components/contact';
import AppFooter from './components/footer';


function App() {
  return (
    <div className="App">
              <AppHeader></AppHeader>
        <main>
              <AppSlide />
              <AppAbout />
              <AppService />
              <AppBlog />
              <AppContact/>
              <AppFooter/>
        </main>
    </div>
    
  );
}

export default App;
