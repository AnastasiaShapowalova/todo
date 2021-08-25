import './App.css';
import {Header,Footer,Main} from './components';

// function Header(props) { // компонента. приймає параметри - props. 
//   const { children } = props //назва поля яке хочем достати з обєкта - {}, перейменувати не можна. Дестроктуризація
//   console.log('Header', children)
//   return <Header>Header {children}</Header>
// }

// function Main() {
//   console.log('Main')
//   return <Main>Content</Main>
// }

// function Footer() {
//   console.log('Footer')
//   return <Footer>Footer</Footer>
// }


function App() {
  return (
    <div>
      <Header>
        <Footer></Footer>
      </Header>
      <Main/>
    </div>
  );
}

export default App;
