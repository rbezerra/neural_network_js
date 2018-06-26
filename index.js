const R = require('ramda');
const X_MAX = 400;
const Y_MAX = 400;

const rand = (high, low) =>  Math.random() * (high - low) + low;

const team = point => point.x > point.y ? 1 : -1;

let randomPoints = R.range(0, 10).map(_ => ({
    x: rand(0, X_MAX),
    y: rand(0, Y_MAX),
}));

console.log(randomPoints);

const html = `
  <svg width="${X_MAX}" height="${Y_MAX}">
    ${randomPoints.map(point => 
        `
            <circle
                cx="${point.x}"
                cy="${point.y}"
                r="3"
                fill="${team(point) === -1 ? 'blue' : 'red'}"/>
        `
    )}
    <line x1="0" x2="${X_MAX}" y1="0" y2="${Y_MAX}" stroke="purple"/>
  </svg>
`;

console.log(html);