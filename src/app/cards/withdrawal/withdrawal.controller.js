// import alertify from 'alertify.js';
import _ from 'lodash';
export class WithdrawController {
  constructor($http, $state, $log, AppConstants) {
    'ngInject';
    this.http = $http;
    this.state = $state;
    this.log = $log;
    this.AppConstants = AppConstants;
    this.withdrawalAmount = 0;
    this.userInfo = {};
    this.isTransactionComplete = false;
    this.transactionStatus = '';
    this.errorMessage = '';
    if (!this.state.params.obj || _.isEmpty(this.state.params.obj)) {
      this.state.go('cards');
    } else {
      this.userInfo = this.state.params.obj;
      $log.debug(this.userInfo);
    }
  }

  withdrawMyAmount() {
    this.userInfo = {
      cardNumber: this.userInfo.cardNumber,
      pin: this.userInfo.pin,
      withdrawAmount: this.withdrawalAmount
    };
    this.http.post(`${this.AppConstants.API_URL}cards/withdrawAmount`, this.userInfo).then(res => {
      this.log.debug(res.data);
      this.transactionStatus = res.data;
      this.isTransactionComplete = true;
    }, err => {
      this.errorMessage = err.data.message;
    });
  }
}
