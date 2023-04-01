import logo from './logo.svg';
import './styles/_theme_default.css';
import EventsCalendar from 'react-events-calendar-js'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />

                <EventsCalendar lang='es' events={[
                    {
                        "id": "6krjie1mckp3gbb5cgqjab9k60smab9o6sp3gbb4cph30opl6sojgp9lck",
                        "title": "bomberos capacitación",
                        "date": new Date("2023-04-30T13:10:00.000Z"),
                        "color": "blue",
                        "lnk": "https://www.google.com/calendar/event?eid=NmtyamllMW1ja3AzZ2JiNWNncWphYjlrNjBzbWFiOW82c3AzZ2JiNGNwaDMwb3BsNnNvamdwOWxjayBkamFzYy5kZXZAbQ"
                    },
                    {
                        "id": "n4hl61317m28jr0hb097g7tjp4",
                        "title": "Evento Unico para Djasc",
                        "date": "2023-02-27T23:00:00.000Z",
                        "color": "blue",
                        "description": "Lugar",
                        "lnk": "https://www.google.com/calendar/event?eid=bjRobDYxMzE3bTI4anIwaGIwOTdnN3RqcDQgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "tur3ir92kh98k8vvhkerehevho",
                        "title": "dfsdfsdf",
                        "date": new Date("2023-03-30T00:24:00.000Z"),
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=dHVyM2lyOTJraDk4azh2dmhrZXJlaGV2aG8gZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "ud4dlk6o2scbkmnilr5ugrqsls",
                        "title": "asdasdasd",
                        "date": "2023-03-30T00:25:00.000Z",
                        "color": "blue",
                        "description": "asdasd",
                        "lnk": "https://www.google.com/calendar/event?eid=dWQ0ZGxrNm8yc2Nia21uaWxyNXVncnFzbHMgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "26ccarq9lvehcn4thv171bbj5s",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=MjZjY2FycTlsdmVoY240dGh2MTcxYmJqNXMgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "33dhff0flgoqhitsn47926gc88",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=MzNkaGZmMGZsZ29xaGl0c240NzkyNmdjODggZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "6o79khvps4fnbhpcdlpj7qbeqk",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=Nm83OWtodnBzNGZuYmhwY2RscGo3cWJlcWsgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "bduloj6fih1iomih4tkqki955g",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=YmR1bG9qNmZpaDFpb21paDR0a3FraTk1NWcgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "c2q5qcr3900ielotud00fapbuo",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=YzJxNXFjcjM5MDBpZWxvdHVkMDBmYXBidW8gZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "cmva901nm206e86613echdlm6g",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=Y212YTkwMW5tMjA2ZTg2NjEzZWNoZGxtNmcgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "d55ine66r7o9npav6i7ml739qc",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=ZDU1aW5lNjZyN285bnBhdjZpN21sNzM5cWMgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "decg00mr6upaqjnqbldiplu7fs",
                        "title": "asdasdasds",
                        "date": "2023-04-05T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=ZGVjZzAwbXI2dXBhcWpucWJsZGlwbHU3ZnMgZGphc2MuZGV2QG0"
                    },
                    {
                        "id": "pum5f0c3m7vep0bvq9cg2bmd9k",
                        "title": "asdasdasds",
                        "date": "2023-03-31T00:23:00.000Z",
                        "color": "blue",
                        "description": "sdfsdfsdfsdfsdfsdf",
                        "lnk": "https://www.google.com/calendar/event?eid=cHVtNWYwYzNtN3ZlcDBidnE5Y2cyYm1kOWsgZGphc2MuZGV2QG0"
                    }
                ]} />

            </header>
        </div>
    );
}

export default App;
