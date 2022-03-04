import './styles.css';
import Button from './Button';
import { useState } from 'react';

export default function App() {
	const [color, setColor] = useState([1, 3, 5]);

	const applyColor = () => {
		document.body.style.backgroundColor = formattedColor;
		console.log('apply', formattedColor);
	};

	const chooseColor = () => {
		const random = [];
		for (let i = 0; i < 3; i++) {
			random.push(Math.floor(Math.random() * 256));
		}
		setColor(random);
		console.log(random);
		applyColor();
	};

	let formattedColor = `rgb(${color.join()})`;

	let isLight = color.reduce((a, b) => a + b) < 127 * 3;
	console.log(isLight);

	return (
		<div className="container">
			<h1 className={isLight ? 'black' : 'white'}>
				Your color is {formattedColor}
			</h1>
			<Button shuffleColor={chooseColor} light={isLight} />
		</div>
	);
}
