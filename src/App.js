import './App.css';
import Header from './component/header/Header';
import HeadLine from './component/HeadLine/HeadLine';

function App() {
  return (
    <div className="App">
      <Header/>
      <section className="main">
      <HeadLine header="Test Driven Development (TDD)" desc="Test Driven Development (TDD) is a programming practice which enables developers to write code only if an automated test has failed, thereby avoiding duplication of the code.

The primary aim of TDD is to write code which is clear and bug-free."/>
      </section>
    </div>
  );
}

export default App;
