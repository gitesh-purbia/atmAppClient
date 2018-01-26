import alertify from 'alertify.js';
import _ from 'lodash';
export class CardsController {
  constructor($http, $state, AppConstants, $log) {
    'ngInject';
    this.http = $http;
    this.AppConstants = AppConstants;
    this.state = $state;
    this.log = $log;
    this.cardInfo = {
      cardNumber: '',
      pin: ''
    };
    this.cardHolderInfo = {};
  }

  validateCard() {
    if (this.cardInfo.cardNumber.trim() === '') {
      alertify.log('Please Enter Card Number!');
      return;
    }
    if (this.cardInfo.cardNumber.trim() === '') {
      alertify.log('Please Pin Number!');
      return;
    }
    if (this.cardInfo.cardNumber !== '' && this.cardInfo.pin !== '') {
      this.http.post(`${this.AppConstants.API_URL}cards/getCardInfo`, this.cardInfo).then(res => {
        if (_.isEmpty(res.data)) {
          this.cardInfo = {
            cardNumber: '',
            pin: ''
          };
          alertify.error('You have enter wrong card number or pin.');
        } else {
          this.cardHolderInfo = res.data;
          this.state.go('withdraw', {obj: res.data});
        }
      }, err => {
        alertify.error(err.data.message);
      });
    }
  }
}
