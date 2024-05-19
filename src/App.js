import logo from './logo.svg';
import './App.css';
import Timeline from './Timeline';
import TweetForm from './TweetForm';

function App() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-xl font-bold my-4">Twitter Clone</h1>
      <TweetForm />
      <Timeline />
    </div>
  );
}

export default App;