import './App.css';
import { Route ,Switch} from 'react-router-dom'
import Home from './pages/Home';
import Room from './pages/Room';
import ContactUs from './components/ContactUs';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
function App() {
  return (
    <>
    <Navbar/>
    <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/rooms/" exact component={Room}/>
    <Route path="/rooms/:slug" exact component={SingleRoom}/>
    <Route component={Error}/>
    </Switch>
    <ContactUs/>

    </>
  );
}
export default App;
