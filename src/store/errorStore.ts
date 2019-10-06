import { observable, action, computed } from 'mobx';

import ErrorItem from './errorModel';
import { IErrorItem, IErrorItemStore } from '../types';

export default class ErrorStore implements IErrorItemStore {
  @observable errorList: IErrorItem[];
  @observable errorListFilter: string;
  constructor() {
    this.errorList = [];
  }

  @computed get getErrorItems() {
    return this.errorList;
  }

  @computed get getErrorItemsByFilter() {
    return this.errorList.filter(item => {
      return item.tags.some((tag: string) => this.errorListFilter == tag);
    });
  }

  @action.bound
  addErrorItem(errorItem: IErrorItem) {
    this.errorList.push(new ErrorItem(errorItem, this));
  }

  @action.bound
  removeErrorItem(errorItem: IErrorItem) {
    this.errorList = this.errorList.filter(item => item !== errorItem) as any;
  }
}
