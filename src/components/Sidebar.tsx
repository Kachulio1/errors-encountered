import * as React from 'react';
import anime from 'animejs';

export default class extends React.Component<any, any> {
  private comingSoonRef: any;
  constructor(props: any) {
    super(props);
    this.comingSoonRef = React.createRef();
  }

  componentDidMount() {
    this.comingSoonRef.current.innerHTML = this.comingSoonRef.current.innerHTML.replace(
        /([^\x00-\x80]|[\w|\?|\.])/g,
        "<span class='letter'>$&</span>"
      );
    anime.timeline({ loop: true })
    .add({
      targets: ".coming-soon .letter",
      translateX: [40, 0],
      translateZ: 0,
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2200,
      sleep: 5000,
      delay: function(_, i) {
        return 500 + 30 * i;
      }
    })
    .add({
      targets: ".coming-soon .letter",
      translateX: [0, -30],
      opacity: [1, 0],
      easing: "easeInExpo",
      duration: 2100,
      delay: function(_, i) {
        return 100 + 30 * i;
      }
    })
  }

  render() {
    return (
      <div className='sidebar'>
        <p ref={this.comingSoonRef} className='coming-soon'>COMING SOON</p>
      </div>
    );
  }
}
