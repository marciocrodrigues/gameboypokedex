import { createGlobalStyle } from 'styled-components';

import FontTTF from './assets/font-nintendo.ttf';

export const GlobalStyle = createGlobalStyle`
	
	@font-face {
		font-family: 'Press Start 2P' ;
		src: url(${FontTTF}) format('truetype');
		font-style: normal;
		font-display: auto;
	}

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