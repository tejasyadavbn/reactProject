import './App.css';
import NavBar from './components/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Pages/Home';
import Footer from './components/Footer';
import ExploreApis from './components/Pages/ExploreApis';
import ExploreApisC2 from './components/Pages/ExploreApisC2';
import ToDoPage from './components/Pages/ToDoPage';


function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/home' exact component={Home}/>
        <Route path='/' exact component={Home}/>
        <Route path='/exploreApis1' exact component={ExploreApis}/>
        <Route path='/exploreApis2' exact component={ExploreApisC2}/>
        <Route path='/cde' exact component={ToDoPage}/>
        <Route path='/cie' exact component={ToDoPage}/>
        <Route path='/cvs' exact component={ToDoPage}/>
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
