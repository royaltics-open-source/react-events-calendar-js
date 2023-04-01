# react-events-calendar-js

> React-js component to display events in a custom calendar

[![NPM](https://img.shields.io/npm/v/react-events-calendar-js.svg)](https://www.npmjs.com/package/react-events-calendar-js) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-events-calendar-js
```

## Usage

```tsx
import logo from './logo.svg';
import './styles/_theme_default.css';
//import "react-events-calendar-js/dist/light.css";
//import "react-events-calendar-js/dist/dark.css";
//import "react-events-calendar-js/dist/default.css";

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


```

## collaborators

@maksimkaJCHK @djasc.dev

## License

GNU General Public License v3.0
 [royaltics-open-source](https://github.com/royaltics-solutions)
 [maksimkaJCHK](https://github.com/maksimkaJCHK)