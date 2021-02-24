import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { MenuProvider } from './Contexts/MenuListContext';
import UserContextProvider from './Contexts/UserContext';


ReactDOM.render(
  <React.StrictMode>
    <UserContextProvider>
      <MenuProvider>
        <App />
      </MenuProvider>
    </UserContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
