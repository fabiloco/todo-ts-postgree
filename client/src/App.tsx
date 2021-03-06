import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';

const App = (): JSX.Element => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;