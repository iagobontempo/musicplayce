import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import Main from './components/main/Main';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <GlobalStyle />
    </div>
  );
}

export default App;
