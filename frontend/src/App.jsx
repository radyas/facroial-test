import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AddContact from './pages/Contacts/AddContact';
import ListContacts from './pages/Contacts/ListContacts';
import Home from './pages/Home';

function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <NavBar></NavBar>
                <Switch>
                    <Route exact path='/contacts/add' component={AddContact} />
                    <Route exact path='/contacts/:id' component={AddContact} />
                    <Route exact path='/contacts' component={ListContacts} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
