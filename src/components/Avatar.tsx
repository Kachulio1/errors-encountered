import * as React from 'react';

interface IAvatar {
  src: string;
  fullName: string;
  size?: string;
  isSquare?: boolean
}

export default ({ src, fullName, size = '250', isSquare }: IAvatar) => (
  <div className='avatar-wrap' style={{ fontSize: `${size}%` }}>
    <div className={`avatar ${isSquare && 'isSquare'}`}>
      {src ? <img src={src} /> : <div className='initial'>{fullName[0]}</div>}
    </div>
  </div>
);
