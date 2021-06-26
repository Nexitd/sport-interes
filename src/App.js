import './App.css';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';

const App = (props) => {
  return (
      <div className='wrapper'>
          <Header />
          <Main state={ props.state}/>
      </div>
  );
}

export default App;
