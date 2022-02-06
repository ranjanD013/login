//import logo from './logo.svg';
import './App.scss';
import Chatbot from './chatbot/cahtbot';
// import Home from './cmp/Home';
// import About from './cmp/About';
// import Listing from './cmp/Listing';
// import Auth from './cmp/Auth';
import LoginForm from './component/LoginForm';


function App() {
  return (
    <div className="App">
      {/* <LoginForm /> */}
      <Chatbot/>
    </div>
  );
}

export default App;
