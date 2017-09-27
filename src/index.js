import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Buildings = ({heights, height}) => <g>
    {
        heights.map((h, i) => <rect x={i} y={height - h} width={1} height={h}/>)
    }
</g>;

const GameView = ({heights, position, bomb, width, height}) => <svg viewBox={`0 0 ${width} ${height}`}>
    <Buildings heights={heights} height={height}/>
    <circle cx={position.x - .5} cy={position.y - .5} r={.5}/>
</svg>;

ReactDOM.render(<GameView heights={Array(50).fill().map(i => Math.random() * 18 | 0)}
                          width={80}
                          height={24}
                          position={{x: 3, y: 1}}
    />,
    document.getElementById('root'));
