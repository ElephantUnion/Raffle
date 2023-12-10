import React, { FC } from 'react';
import { Switch, Route } from 'react-router-dom';

import { routes } from './routes';
import ExploreRafflesScreen from '../pages/ExploreRafflesScreen';
import RaffleDetailsScreen from './raffleDetails';
import LandingScreen from '../pages/LandingScreen';
import StakeScreen from '../pages/StakeScreen';
import AdminHomeScreen from '../pages/admin/AdminHomeScreen';
import AdminRaffleScreen from '../pages/admin/AdminRaffleScreen';
import ToolsScreen from '../pages/ToolsScreen';

export const Router: FC = () => (
  <Switch>
    <Route path={routes.RAFFLES} exact component={ExploreRafflesScreen} />
    <Route path={`/raffle/:id`} component={RaffleDetailsScreen} />s
    <Route path={routes.TOOLS} exact component={ToolsScreen} />
    <Route path={routes.ADMIN.HOME} exact component={AdminHomeScreen} />
    <Route
      path={`${routes.ADMIN.RAFFLES}/:id`}
      exact
      component={AdminRaffleScreen}
    />
  </Switch>
);
