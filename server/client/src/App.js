import {BrowserRouter, Route} from 'react-router-dom'
import './App.css';

const Header = () => <h2>Header</h2>
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>New survey</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div>
          <Header/>
          <Route path="/" exact component={Landing}/>
          <Route path="/surveys" exact component={Dashboard}/>
          <Route path="/surveys/new" component={SurveyNew}/>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
