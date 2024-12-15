// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import './App.css';

function App() {
  return (
    <div>
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin]} 
        initialView="dayGridMonth"
        locales={[jaLocale]}         
        locale='ja'              
        headerToolbar={{                          
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}  
        events={[
          {title:'圭悟が死ぬ日', start: '2024-12-16'},
          {title:'何もないです', start: '2024-12-17', end: '2024-12-20'}
        ]}
      />
    </div>
  );
}

export default App;

