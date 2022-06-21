
import {Component} from 'react';
class SalutComponent extends Component {
  constructor(props){
    super(props);
    console.log('Sunt in SalutComponent constructor');
  }
  componentDidMount(){
    console.log('Sunt in SalutComponent componentDidMount');
  }
  render() {
    return (
      <div className="App">
        <h1> Salut Componenta Noua {this.props.name}</h1>
      </div>
    );
  }
 
}

export default SalutComponent;
