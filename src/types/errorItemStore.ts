import { IErrorItem } from '.';

export interface IErrorItemStore {
  errorList?: IErrorItem[];
  removeErrorItem: Function;
}
