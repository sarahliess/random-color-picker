function Button({ light, shuffleColor }) {
	return (
		<button
			onClick={shuffleColor}
			className={light ? 'light-button' : 'dark-button'}>
			Refresh
		</button>
	);
}
export default Button;
