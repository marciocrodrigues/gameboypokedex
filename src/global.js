import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		background: #09cbe4;
		-webkit-font-smoothing: antialiased;
		display: flex;
		justify-content: center;
	}

	h1, h2, h3, h4, h5, h6, p {
		margin: 0;
		color: white;
		font-family: 'Lato', sans-serif;
		font-weight: 700;
	}
`;