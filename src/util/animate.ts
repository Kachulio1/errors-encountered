import { TweenMax, Sine, Linear } from 'gsap';

export default (elm: any, height: number) => {
  TweenMax.to(elm, randomNumber(6, 15), {
    y: height + 100,
    ease: Linear.easeNone,
    repeat: -1,
    delay: -15
  });
  TweenMax.to(elm, randomNumber(4, 8), {
    x: '+=100',
    rotationZ: randomNumber(0, 180),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut
  });
  TweenMax.to(elm, randomNumber(2, 8), {
    rotationY: randomNumber(0, 360),
    repeat: -1,
    yoyo: true,
    ease: Sine.easeInOut,
    delay: -5,
    opacity: 0
  });
};

export const randomNumber = (min: any, max: number) => {
  return min + Math.random() * (max - min);
};
