import angular from 'angular';
import 'angular-ui-router';

import routesConfig from './routes';

import './index.scss';
import 'angular-ui-bootstrap';

import {
  CardsController
} from './app/cards/cards.controller';

import {
  WithdrawController
} from './app/cards/withdrawal/withdrawal.controller';

import {
  Constants
} from './index.constant';

import {
  config
} from './index.config';

import {
  CardsRoutes
} from './app/cards/routes';

angular
  .module('atmApp', ['ui.router', 'ui.bootstrap'])
  .constant('AppConstants', Constants)
  .config(routesConfig)
  .config(config)
  .config(CardsRoutes)
  .controller('CardsController', CardsController)
  .controller('WithdrawController', WithdrawController);
