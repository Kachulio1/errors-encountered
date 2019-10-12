import * as React from 'react';

export default class extends React.Component<any, any> {
  state = { file: null, imageUrl: '' };

  handleSubmit = (e: any) => {
    e.preventDefault();
  };

  render() {
    let { image } = this.props;
    let Image;
    if (image) {
      Image = <img src={image} />;
    } else {
      Image = (
        <svg
          xmlns='http://www.w3.org/2000/svg'
          xlinkHref='http://www.w3.org/1999/xlink'
          viewBox='0 0 {{w}} {{h}}'
        >
          <defs>
            <symbol id='a' viewBox='0 0 90 66' opacity='0.3'>
              <path d='M85 5v56H5V5h80m5-5H0v66h90V0z' />
              <circle cx='18' cy='20' r='6' />
              <path d='M56 14L37 39l-8-6-17 23h67z' />
            </symbol>
          </defs>
          <use href='#a' width='20%' x='40%' />
        </svg>
      );
    }

    return (
      <div className='previewComponent'>
        <input
          className='fileInput'
          type='file'
          onChange={e => this.props.handleImageChange(e)}
        />

        <div className='imgPreview'>{Image}</div>
      </div>
    );
  }
}
