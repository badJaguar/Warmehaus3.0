import { IMetaData } from '../../../../models/IMetaData.interface';

export class MetaContacts implements IMetaData {
  keywords = 'keywords';
  keywordsContent = 'магазин, как проехать, где находится, адрес, позвонить, написать, вармхаус адрес, вармхаус бай';
  description = 'description';
  descriptionContent = 'Магазин теплых полов: Warmehaus, Devi, Nexas, Teplotex. Наши контакты: +375 (29) 352 32 04, +375 (29) 557 59 80. Наш магазин расположен на строительном рынке "Уручье" города Минска.';
  ogTitle = 'og:title';
  ogTitleContent = 'Контакты';
  ogDescription = 'og:description';
  ogDescriptionContent = 'Телефоны, адрес, консультация по телефону, проложить маршрут к магазину';
  ogType = 'og:type';
  ogTypeContent = 'website';
  ogImage = 'og:image';
  ogImageContent = '../../../assets/images/og-contacts.jpg';
  ogUrl = 'og:url';
  ogUrlContent = 'https://warmehaus.com.by/home/contacts';
}
