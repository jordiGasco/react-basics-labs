import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="hola" />
      <Task title="Laundry" deadline="Tomorrow" description="hola">
        Fold laundry and put away
    </Task>
      <Task title="Tidy" deadline="Today" description="hola"/>
    </div>
  );
}

export default App;
