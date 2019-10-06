import { observable, action, computed } from 'mobx';
import { IErrorItem, IErrorItemStore } from '../types';

export default class ErrorItem  implements IErrorItem{
  id: string;
  image: string;
  errorList: IErrorItemStore;
  @observable title: string;
  @observable tags: string[];

  constructor(
    { title, id, image, tags = [] }: IErrorItem,
    errorList: IErrorItemStore
  ) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.tags = tags;
    this.errorList = errorList;
  }

  @computed get errorItem() {
    return this;
  }

  @action.bound removeItem() {
    this.errorList.removeErrorItem(this);
  }
}
