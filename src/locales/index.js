
import { I18n } from 'react-i18nify';
import en from './en';

export default (locale = 'en') => {
  I18n.setTranslations({ en });
  I18n.setLocale(locale);
}
