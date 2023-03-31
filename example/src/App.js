import logo from './logo.svg';
import './styles/_theme_default.css';
import EventsCalendar from 'react-events-calendar-js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <EventsCalendar lang='es' events={[{
          color: 'red',
          date: new Date(2023,2,15).setHours(22,25,1),
          title: 'Recordatorio',
          description: 'sasdasd asd asdsd',
          id: 1,
          lnk: 'sdasdasd',
          onClick: 'SS'
        },{
          color: 'blue',
          date: new Date(2023,2,1).setHours(22,25,1),
          title: 'Reunion con los Jefes Administrativos',
          description: 'sasdasd asd asdsd',
          id: 1,
          lnk: 'sdasdasd',
          onClick: 'SS'
        },{
          color: 'red',
          date: new Date(2023,2,15).setHours(10,25,1),
          title: 'Evento Importante',
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
