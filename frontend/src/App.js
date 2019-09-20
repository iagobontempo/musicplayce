import React from 'react';
import GlobalStyle from './style/GlobalStyle';
import MusicList from './components/musicList/MusicList';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <MusicList />
      <Footer />
      <GlobalStyle />
    </div>
  );
}

export default App;
