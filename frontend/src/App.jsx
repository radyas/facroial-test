import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import AddContact from './pages/Contacts/AddContact';
import EditContacts from './pages/Contacts/EditContacts';
import ListContacts from './pages/Contacts/ListContacts';
import ContactHistory from './pages/Contacts/ContactHistory';
import Home from './pages/Home';
import AddMetric from './pages/Metrics/AddMetric';
import TimelinePage from './pages/Metrics/Timeline';

function App() {
    return(
        <BrowserRouter>
            <div className="App">
                <NavBar></NavBar>
                <Switch>
                    <Route exact path='/metrics/add' component={AddMetric} />
                    <Route exact path='/metrics' component={TimelinePage} />
                    <Route exact path='/contacts/add' component={AddContact} />
                    <Route exact path='/contacts/edit/:id' component={EditContacts} />
                    <Route exact path='/contacts/history/:id' component={ContactHistory} />
                    <Route exact path='/contacts' component={ListContacts} />
                    <Route exact path='/' component={Home} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

export default App;
