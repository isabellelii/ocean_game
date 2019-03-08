import { SingleObstacle } from './../interfaces/single-obstacle';

export const playGroundHeight = window.innerHeight;
export const playGroundWidth = 800;
export const frameNumber = 0;
export const spritePath = '../assets/img/fishes.png';
export const playerCarSpeed = 10;
export const playerCar = {
  sX: 20,  // Purple Fish
  sY: 150,
  sWidth: 200,
  sHeight: 200,
  width: 100,
  height: 100,
};
export const vehicles: SingleObstacle[] = [
  {
    sX: 45,  // Blue Shark
    sY: 3,
    sWidth: 170,
    sHeight: 170,
    width: 100,
    height: 100,
  }
];
