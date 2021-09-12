import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router';

import './App.css';

const HomePage = lazy(() => import('./views/homePage/HomePage'));
const Company = lazy(() => import('./views/company/Company'));
const Vacancy = lazy(() => import('./views/vacancy/Vacancy'));
const Services = lazy(() => import('./views/services/Services'));
const WaterNetwork = lazy(() => import('./views/waterNetwork/WaterNetwork'));
const Heating = lazy(() => import('./views/heating/Heating'));
const OutdoorHeating = lazy(() =>
  import('./views/OutdoorHeating/OutdoorHeating'),
);

function App() {
  return (
    <div>
      <Suspense fallback={<div>Завантаження...</div>}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/company" exact component={Company} />
          <Route path="/vacancy" exact component={Vacancy} />
          <Route path="/services" exact component={Services} />
          <Route path="/services/1" exact component={WaterNetwork} />
          <Route path="/services/2" exact component={Heating} />
          <Route path="/services/3" exact component={OutdoorHeating} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
