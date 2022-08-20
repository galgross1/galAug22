import {Route} from 'react-router-dom'
import Welcome from './Components/Welcome';

function App() {
  return (
    <div>
      <Route path='/welcome'>
        <Welcome/>
      </Route>
    </div>
  );
}

export default App;
