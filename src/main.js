import Graphics from './graphics';
import Canvas from './canvas';
import Play from './play';

export function app(element, options) {

  let canvas = new Canvas(element);

  let graphics = new Graphics(canvas);

  let ctx = {
    canvas,
    graphics
  };

  let play = new Play(ctx);
  play.init({});

  play.update();
  play.render();
}
