import './App.css';
import Header from './components/Header';
import Weather from './components/Weather';


function App() {
  
  return (
    <>
      <div id='container' className='text-left p-6 max-w-screen-sm mx-auto my-32 rounded-2xl overflow-hidden'>
        <Header />
        <Weather />
      </div>
    </>
  );
}

export default App;
