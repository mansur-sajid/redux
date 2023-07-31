import logo from './logo.svg';
import './App.css';
import Continaer from './components/Continaer';
import store from './redux/store';
import { Provider } from 'react-redux';
import Container1 from './components/Container1';
import Container2 from './components/Container2';

function App() {
  return (
    <Provider store = {store}>
    <div className="App">
      <Continaer/>
      <Container1/>
      <Container2/>
    </div>
    </Provider>
  );
}

export default App;
