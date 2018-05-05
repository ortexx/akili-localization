import Akili from 'akili';
import Localization from 'localizationjs/src/localization';

const localization = {};

/**
 * Define the service
 * 
 * @param {object} options 
 */
localization.define = function (options = {}) {
  this.locale = new Localization(options);
  const keys = Object.getOwnPropertyNames(Localization.prototype);
  
  for(let i = 0, l = keys.length; i < l; i++) {
    const key = keys[i];
    const val = this.locale[keys[i]];

    if(key == 'constructor' || typeof val != 'function') {
      continue;
    }

    this[key] = val.bind(this.locale);
  }

  const originalSetDefaultLocale = Localization.prototype.setDefaultLocale;
  const originalSetCurrentLocale = Localization.prototype.setCurrentLocale;

  this.setDefaultLocale = function () {
    const res = originalSetDefaultLocale.apply(this.locale, arguments);
    Akili.__init && Akili.compile(Akili.root.el, { recompile: { checkChanges: true } });
    return res;
  }

  this.setCurrentLocale = function () {
    const res = originalSetCurrentLocale.apply(this.locale, arguments);
    Akili.__init && Akili.compile(Akili.root.el, { recompile: { checkChanges: true } });
    return res;
  }

  Akili.options.globals.translate = this.translate.bind(this.locale);
  Akili.options.globals.currency = this.currency.bind(this.locale);  
  Akili.options.globals.number = this.number.bind(this.locale);
  Akili.options.globals.date = this.date.bind(this.locale);

  Object.defineProperty(localization, 'translateValueHandler', {
    set: value => {
      this.locale.translateValueHandler = value.bind(this.locale);
    }
  });

  Object.defineProperty(localization, 'translateParamsHandler', {
    set: value => {
      this.locale.translateParamsHandler = value.bind(this.locale);
    }
  });
}

Akili.defaults(() => Akili.services.localization = localization);
export default localization;
