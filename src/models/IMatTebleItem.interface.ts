import { IItem } from './IItem.interface';

export interface ITermostat extends IItem {
  description?: string;
  picPath?: string;
  picAlt?: string;
}
