import { assert } from 'chai';
import Akili from 'akili';
import App from './app.js';
import localization from '../src/localization.js';

const en = {
  hello: 'world',
  withParams: 'with params %%'
};

const ru = {
  hello: 'привет',
  withParams: 'with params %%'
};

localization.define({
  defaultLocale: 'en',
  currentLocale: 'ru',
});

localization.addDict('en', en);
localization.addDict('ru', ru);
Akili.options.debug = false;
const app = document.createElement('app');
document.body.appendChild(app);
App.define();

describe('Application initialization', () => {
  let component;

  before(() => {
    return Akili.init().then(() => {
      component = app.__akili;
    });
  });

  describe('akili-localization.js', () => {  
    it('should translate the simple key', () => {
      assert.equal(component.el.querySelector('a').innerHTML, ru.hello);
    });

    it('should translate with params', () => {
      assert.equal(component.el.querySelector('b').innerHTML, 'with params 99');
    });

    it('should localize a currency', () => {
      assert.equal(component.el.querySelector('c').innerHTML.replace(/&nbsp;/g, ' '), '1 250 000,99 $');
    });

    it('should localize a date', () => {
      assert.equal(component.el.querySelector('d').innerHTML, '17.12.1995');
    });

    it('should localize a number', () => {
      assert.equal(component.el.querySelector('e').innerHTML.replace(/&nbsp;/g, ' '), '1 250 000,99');
    });

    it('should change the current locale', () => {
      localization.setDefaultLocale('ru');
      localization.setCurrentLocale('en');
      assert.equal(component.el.querySelector('a').innerHTML, en.hello);      
    });
  });
});
