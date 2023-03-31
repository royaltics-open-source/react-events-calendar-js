import logo from './logo.svg';
import './App.css';
import EventsCalendar from 'react-events-calendar-js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <EventsCalendar lang='es' events={[{
          color: 'red',
          date: new Date(2023,3,15),
          title: 'Recordatorio',
          description: 'sasdasd asd asdsd',
          id: 1,
          lnk: 'sdasdasd',
          onClick: 'SS'
        },{
          color: 'red',
          date: new Date(2023,3,15),
          title: 'Recordatorio',
          description: 'sasdasd asd asdsd',
          id: 1,
          lnk: 'sdasdasd',
          onClick: 'SS'
        },]} />

      </header>
    </div>
  );
}

export default App;
