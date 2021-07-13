
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom';
import {MainApp} from './components/MainApp'


export const AppRouter = () => {

    return (
        <Router>
           <Switch>
              <Route exact path="/"> <MainApp /> </Route> 
               <Route path="/metrics/:metricKey"> <MainApp /> </Route>
            </Switch> 
        </Router>
    );
}