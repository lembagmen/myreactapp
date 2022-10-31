import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header.js';
import Footer from './Footer';
// import MainContent from './MainContent';
import Square from './Square';
import Board from './Board';

function App() {
return (
    <div className="">
      <Square textContent="Hello" dataIndex="1"/>
      <Square textContent="World" dataIndex="2"/>
      <hr></hr>
      <Header/>
      <Board/>

      <Footer textContent="All rights reserved 2022."/>
    </div>
  );
}

export default App;
