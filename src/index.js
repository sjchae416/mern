import React from 'react';
// NOTE from https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
import { createRoot } from 'react-dom/client';
// NOTE we have used BrowserRouter to keep our UI in sync with the URL. BrowserRouter helps with seamless transitions while switching between components. Basically, it will only reload/refresh the component that needs to be changed instead of refreshing/reloading the entire page. Though BrowserRouter is not a necessity, it is a must if you want your app to be responsive.
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
);
