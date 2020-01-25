import { IMetaData } from '../../../../models/IMetaData.interface';

export class MetaInstructionsPage implements IMetaData {
  keywords = 'keywords';
  // tslint:disable-next-line: max-line-length
  keywordsContent = 'инструкции по монтажу теплых полов, иструкции, теплый пол, монтаж, монтаж полов';
  description = 'description';
  // tslint:disable-next-line:max-line-length
  descriptionContent = 'Как правильно выбрать тёплые полы. Как правильно подготовиться к монажу теплых полов и полная инструкция по установке теплых полов.';
  ogTitle = 'og:title';
  ogTitleContent = 'Инструкции';
  ogDescription = 'og:description';
  // tslint:disable-next-line:max-line-length
  ogDescriptionContent = 'Как правильно выбрать тёплые полы. Как правильно подготовиться к монажу теплых полов и полная инструкция по установке теплых полов.';
  ogType = 'og:type';
  ogTypeContent = 'website';
  ogImage = 'og:image';
  ogImageContent = '../../../assets/images/grid-1-web.jpg';
  ogUrl = 'og:url';
  ogUrlContent = 'https://warmehaus.com.by/instructions';
}
