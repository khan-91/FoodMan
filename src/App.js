
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import MainComponent from './component/MainComponent';
import MyStore from './redux/MyStore';
import { Provider } from 'react-redux';

function App() {
  // console.log("App.js: ", MyStore.getState());
  
  return (
    <div className="App">
      <Provider store={MyStore}>
        <BrowserRouter>
          <MainComponent />
        </BrowserRouter>
      </Provider>

    </div>
  );
}

export default App;
