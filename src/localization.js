import Akili from 'akili';
import globals from 'akili/src/globals';
import Localization from 'localizationjs/src/localization';

const localization = {
  tags: ['translate', 'currency', 'number', 'date']
};

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
    this.tags.forEach(tag => Akili.triggerTag(tag));
    return res;
  }

  this.setCurrentLocale = function () {    
    const res = originalSetCurrentLocale.apply(this.locale, arguments);
    this.tags.forEach(tag => Akili.triggerTag(tag));
    return res;
  }

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

  this.tags.forEach(tag => globals[tag] = this[tag].bind(this.locale));
}

Akili.services.localization = localization;
export default localization;