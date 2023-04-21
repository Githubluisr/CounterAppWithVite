import PropType from 'prop-types'

const getName = (welcomeMessage, fecha) => {
	return {
    welcomeMessage,
    date: fecha
  } 
};

const message = "Juan Luis";

export const FirstApp = ( {title, subTitle, subSubTitle} ) => {
	return (
		<>
			<h1 data-testid='test-title'>{title}</h1>
			{/* <code> {JSON.stringify(getName("Bienvenido a React", "Apr 6, 2023"))} </code> */}
			<h2>{subTitle}</h2>
			<h2>{subTitle}</h2>
			<h3>{subSubTitle}</h3>
		</>
	);
};

FirstApp.propTypes = {
	title: PropType.string.isRequired,
	subtitle: PropType.string,
}

FirstApp.defaultProps = {
	//title: 'Space for Title',
	subTitle: 'Space for subtitle',
	subSubTitle: 'Space for sub-subtitle',
}

