import { BrowserRouter, Route } from 'react-router-dom';

import MainPage from 'pages/MainPage';
import DetailPage from 'pages/DetailPage';

function Router() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/detail" component={DetailPage} />
    </BrowserRouter>
  );
}

export default Router;
