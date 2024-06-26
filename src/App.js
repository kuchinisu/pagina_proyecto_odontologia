import './App.css';
import Home from './components/Home';
import DocumentacionAPI from './components/DocumentacionAPI';
import store from './store';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error404 from './components/err/Error404';

function App() {
  return (
    
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="*" element={<Error404/>}/>
            <Route path="/" element={<Home/>}/>
            <Route path='/documentacion' element={<DocumentacionAPI/>}/>
          </Routes>
        </Router>
      </Provider>
   </div>

  
  );
}

export default App;
