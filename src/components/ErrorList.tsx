import * as React from 'react';
import { inject, observer } from 'mobx-react';
import ErrorItem from './ErrorItem';

@inject('errorStore')
@observer
export default class ErorrList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
      <div className='error-list'>
        {this.props.errorStore.errorList.map((errorItem: any, index: number) => {
          return <ErrorItem key={index} errorItem={errorItem} />;
        })}
      </div>
    );
  }
}
