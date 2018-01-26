export function CardsRoutes($stateProvider) {
  'ngInject';
  $stateProvider
    .state('cards', {
      url: '/',
      templateUrl: 'app/cards/cards.html',
      controller: 'CardsController',
      controllerAs: 'cardsCtrl',
      data: {}
    })
    .state('withdraw', {
      url: '/withdraw',
      templateUrl: 'app/cards/withdrawal/withdrawal.html',
      controller: 'WithdrawController',
      controllerAs: 'WithdrawCtrl',
      params: {
        obj: null
      }
    });
}
