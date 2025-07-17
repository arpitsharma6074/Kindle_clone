import './App.css';
import amazon_logo from './assets/amazon_logo.png';
function App() {
  return (
    <div className="App"> 
      <header>
        <img src="https://m.media-amazon.com/images/G/01/kfw/landing/img_logo._CB611756372_.png" alt="Amazon Kindle" />

        <h2>Take your stories wherever you go</h2>

        <button id="App__signIn">
          <img src={amazon_logo} alt="" />
          <span>Sign In with your account</span>
        </button>
        <button id="App__signUp">Create an Amazon Account</button>
        <img id = "kindle_on_web" src="https://m.media-amazon.com/images/G/01/kfw/landing/img_kindleWeb_IN2x._CB610886625_.png" alt="" />
      </header>
      <main></main>
      <footer></footer>
    </div>
  )
}

export default App
