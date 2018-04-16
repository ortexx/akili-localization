# akili-localization [![npm version](https://badge.fury.io/js/akili-localization.svg)](https://badge.fury.io/js/akili-localization)
Localization service for [Akili framework](https://github.com/ortexx/akili).

## Example

```js
import Akili from 'akili';
import localization from 'akili-localization';

const dictionaryEN = {
  hello: "world",
  languages: {
    en: "english",
    ru: "russian"
  },
  how: "from %% to %%";
  when "at {{ time }} o'clock"
};

const dictionaryRU = {
  hello: "привет"
};

localization.define({
  defaultLocale: "en",
  currentLocale: "ru",
});

localization.addDict("en-US", dictionaryEN);
localization.addDict("ru", dictionaryRU);

document.addEventListener('DOMContentLoaded', () => {
  Akili.init().catch((err) => console.error(err));
});
```

```html
<div>${ translate('hello') }</div>
<div>${ translate('how', [1, 10]) }</div>
<div>${ translate('when', { time: 5 }) }</div>
<div>${ date(new Date('1995-12-17T03:24:00')) }</div>
<div>${ currency(1250000.99, 'USD') }</div>
<div>${ number(1250000.99) }</div>
```

After the compilation:

```html
<div>привет</div>
<div>from 1 to 10<div>
<div>at 5 o'clock</div>
<div>17.12.1995</div>
<div>1 250 000,99 $</div>
<div>1 250 000,99</div>
```

You can change the default or current locale any time you want and all expressions in templates will be updated.  
The service based on [localizationjs](https://github.com/ortexx/localizationjs). 

__.define()__ method take __localizationjs__ options, create an instance of the librarry class and put it on __locale__ property in the service object.
In addition, the service has all the same methods as __localizationjs__.

```javascript
localization.setDefaultLocale('es');
localization.setCurrentLocale('fr');
localization.hasTranslation('hello');

// ...
```

If you load the component as a script, you will have __Akili.services.localization__ to get it.

 