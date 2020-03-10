function rgba(r, g, b, a = 1) {
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

export default function Play(ctx) {
  const { canvas, graphics: g } = ctx;



  const
  black = rgba(0),
  blue = rgba(100, 100, 255, 0.5),
  red = rgba(255, 100, 100, 0.5),
  green = rgba(100, 255, 100, 0.5),
  darkblue = rgba(100, 100, 255),
  darkred = rgba(255, 100, 100),
  darkgreen = rgba(100, 255, 100);  

  this.init = () => {
  };

  this.update = () => {
  };

  this.render = () => {

    g.clear(black);

    debug();
  };

  const debug = () => {

    const w = 20;

    let lw = 2;

    g.srect(lw, lw, w, w, red, darkred);
    g.srect(w * 1 + lw * 2, lw, w, w, blue, darkblue);
    g.srect(w * 2 + lw * 3, lw, w, w, green, darkgreen);
  };


}
