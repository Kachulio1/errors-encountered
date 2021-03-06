import * as React from 'react';
import { inject } from 'mobx-react';
import UploadImage from './UploadImage';
import TagInput from './TagInput';

@inject('errorStore')
export default class Modal extends React.Component<any, any> {
  state = {
    id: '',
    title: '',
    description:'',
    tags: [],
    image: null
  };

  handleChange = (e: any) => {
    const { value, name } = e.target;
    if (name == 'tags') {
      return this.setState({ [name]: value.split(' ') });
    }
    this.setState({ [name]: value });
  };

  handleTags = (event: any) => {
    const value = event.target.value.replace(/,/g, '');
    if (value !== '') {
      this.setState({ tags: [...this.state.tags, value] });
      event.target.value = '';
    }
  };

  removeTag = (indexToRemove: number) => {
    this.setState({
      tags: [
        ...this.state.tags.filter(
          (_: never, index: number) => index !== indexToRemove
        )
      ]
    });
  };

  handleImageChange = (e: any) => {
    e.preventDefault();

    let fileReader = new FileReader();
    let file = e.target.files[0];

    fileReader.onloadend = () => {
      this.setState({
        image: fileReader.result
      });
    };

    fileReader.readAsDataURL(file);
  };

  onSubmit = (e: any) => {
    this.props.errorStore.addErrorItem({ ...this.state });
    this.setState({
      id: '',
      title: '',
      tags: [],
      image: ''
    });
    e.preventDefault();
    this.props.hideModal();
  };
  render() {
    return (
      <div className={'form-container'}>
        <div
          style={{
            padding: 20,
            background: '#fff',
            borderRadius: '2px',
            display: 'inline-block',
            minHeight: '300px',
            margin: '1rem',
            position: 'relative',
            minWidth: '300px',
            boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
            justifySelf: 'center'
          }}
        >
          <form onSubmit={this.onSubmit}>
            <label>
              Title:
              <input
                type='text'
                value={this.state.title}
                name='title'
                onChange={this.handleChange}
              />
            </label>

            <label>
              Description:
              <input
                type='description'
                value={this.state.description}
                name='description'
                onChange={this.handleChange}
              />
            </label>

            <input type='submit' value='Submit' />
          </form>
          <br />
          <UploadImage
            handleImageChange={this.handleImageChange}
            image={this.state.image}
          />

          <label>
            Tags:
            <TagInput
              handleTags={this.handleTags}
              removeTag={this.removeTag}
              tags={this.state.tags}
            />
          </label>

          <button onClick={this.props.hideModal}>Close</button>
        </div>
      </div>
    );
  }
}
