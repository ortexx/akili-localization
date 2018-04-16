import Akili from 'akili';

export default class App extends Akili.Component {
  static define() {
    Akili.component('app', App);
  }
  
  constructor(...args) {
    super(...args);
    
    this.el.innerHTML = `
      <a>\${ translate('hello') }</a>
      <b>\${ translate('withParams', [99]) }</b>
      <c>\${ currency(1250000.99, 'USD') }</c>
      <d>\${ date(new Date('1995-12-17T03:24:00')) }</d>
      <e>\${ number(1250000.99) }</e>
    `;
  }
}