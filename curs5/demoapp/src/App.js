import './App.css';
import {Component} from 'react';
import SalutComponent from './components/SalutComponent';
class App extends Component {
 
  constructor(props) {
    super(props);
    console.log('Sunt in constructor');
  }
  componentDidMount(){
    console.log('Sunt in componentDidMount');
  }
  render() {
    return (
      <div className="App">
        <h1> Salut React!</h1>
        <SalutComponent name='Ion' />
        <SalutComponent name='Vasile' />
      </div>
    );
  }
 
}

export default App;
