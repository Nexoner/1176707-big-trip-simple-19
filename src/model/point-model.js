import { getRandomPoint } from '../mock/point.js';

const POINT_COUNT = 9;

export default class PointModel {
  points = Array.from({length: POINT_COUNT}, getRandomPoint);

  getPoints() {
    return this.points;
  }
}
