import * as React from 'react';
import { observer } from 'mobx-react';
import {
  FaRegComment,
  FaRegHeart,
  FaRegBookmark,
  FaGithub,
  FaLinkedinIn,
  FaGit,
  FaTwitter,
  FaFacebookF
} from 'react-icons/fa';
@observer
export default class extends React.Component<any, any> {
  render() {
    return (
      <div className='card'>
        <div className='card-image'></div>
        <div className='card-text'>
          <span className='date'>4 days ago</span>
          <h2>{this.props.errorItem.title}</h2>
          <p>I did this and that and poof the error was no more.</p>
        </div>
        <div className='social-btns'>
          <a className='btn twitter' href='#'>
            <FaTwitter className='fa' />
          </a>
          <a className='btn github' href='#'>
            <FaGit className='fa'/>
          </a>

          <a className='btn linkedin' href='#'>
            <FaLinkedinIn className='fa' />
          </a>
        </div>
        
        <div className='card-stats'>
          <div className='stat'>
            <div className='value'>
              4<sup>m</sup>
            </div>
            <div className='type'>read</div>
          </div>
          <div className='stat border'>
            <div className='value'>5123</div>
            <FaRegHeart />
          </div>
          <div className='stat'>
            <div className='value'>32</div>
            <FaRegComment />
          </div>
        </div>

      </div>
    );
  }
}
