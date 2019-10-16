import React from 'react';

export default (props: any) => {

  return (
    <div className='tags-input'>
      <ul id='tags'>
        {props.tags.map((tag: string, index: number) => (
          <li key={index} className='tag'>
            <span className='tag-title'>{tag}</span>
            <span className='tag-close-icon' onClick={() => props.removeTag(index)}>
              x
            </span>
          </li>
        ))}
      </ul>
      <input
        type='text'
        onKeyUp={event => (event.key === 'Enter' || event.keyCode == 188 ? props.handleTags(event) : null)}
        placeholder='Press enter to add tags'
      />
    </div>
  );
};
