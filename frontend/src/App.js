import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import MusicList from './components/musicList/MusicList';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <MusicList />
      <GlobalStyle />
    </div>
  );
}

export default App;
