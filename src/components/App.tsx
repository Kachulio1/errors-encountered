import  React from 'react';
import CreateItem from './CreateErrorItem';
import ErrorList from './ErrorList'
import AnimatedIcon from './AnimatedIcons'
import Sidebar from './Sidebar';



export default class extends React.Component {
  state = {
    showModal: false
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };
  showModal = () => {
    this.setState({ showModal: true });
  };
  render() {
    return (
      <div className='container'>
        <Sidebar />
        <AnimatedIcon showModal={this.showModal}/>
        <ErrorList />
        {this.state.showModal ? (
          <CreateItem hideModal={this.hideModal} />
        ) : null}
      </div>
    );
  }
}
