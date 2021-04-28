import {BrowserRouter} from "react-router-dom";
import Home from './components/Home'
import About from './components/About'
import Project from './components/Project'


export default function App() {
  return (
<BrowserRouter>
<Home/>
<About/>
<Project/>
{/* <NavBar/>
<Switch>
  <Route component={Home} exact path='/' />
  <Route component={About} path='/about' />
  <Route component={Project} path='/project' />

</Switch> */}
</BrowserRouter>
  );
}

