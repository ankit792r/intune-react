import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import { persistor, store } from './redux/store.jsx';
import App from './App.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import Spinner from './components/Spinner.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={<Spinner/>} persistor={persistor}>
			<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
)
