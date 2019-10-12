import * as React from 'react';
import { TweenLite } from 'gsap';

import animate, { randomNumber } from '../util/animate';
import { Iicon } from '../types';
import Avatar from './Avatar';

export default class extends React.Component<any, any> {
  private animationContainer = React.createRef<HTMLDivElement>();
  // remember to get the length from props ok:
  private iconContainerRefs: any = Array.from({ length: 30 }, () =>
    React.createRef<HTMLDivElement>()
  );

  state = {
    width: window.innerWidth,
    height: 20,
    icons: {
      javascript: 'https://img.icons8.com/color/48/000000/javascript.png',
      vue: 'https://img.icons8.com/color/48/000000/vue-js.png',
      react: 'https://img.icons8.com/officel/16/000000/react.png',
      swift: 'https://img.icons8.com/nolan/64/000000/swift.png'
    } as Iicon
  };

  componentDidMount() {
    // use the node ref to create the animation
    var container = this.animationContainer.current;
    for (const node of this.iconContainerRefs) {
      TweenLite.set(node.current, {
        width: '35px',
        height: '35px',
        position: 'absolute',
        backgroundImage: `url(${this.state.icons[node.current!.id]}`,
        backgroundSize: '30% 30%',
        backgroundRepeat: 'no-repeat',

        x: randomNumber(0, this.state.width),
        y: randomNumber(-200, -150),
        z: randomNumber(-200, 200)
      });

      container!.appendChild(node.current);

      animate(node.current, this.state.height);
    }
  }

  render() {
    return (
      <div className='navbar'>
        <header>
          
            <ul>
              <li>
                <a className='hover-link'>Home</a>
              </li>
              <li>
                <a className='hover-link'>About</a>
              </li>
              <li>
                <a className='hover-link'>Contact</a>
              </li>
              <li>
                <Avatar
                  src='https://cdn.pixabay.com/photo/2016/08/28/13/12/secondlife-1625903_1280.jpg'
                  fullName='Jacob Mus'
                />
              </li>
            </ul>

            <label  className="create-button"onClick={this.props.showModal}></label>
        
        </header>

        <div ref={this.animationContainer} />
        {this.iconContainerRefs.map((node: any, i: number) => {
          return (
            <div
              key={i}
              ref={node}
              id={
                Object.keys(this.state.icons)[
                  Math.floor(Math.random() * (2 - 0 + 1)) + 0
                ]
              }
            />
          );
        })}
      </div>
    );
  }
}
