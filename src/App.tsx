import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";

import './App.css';
import React, { useCallback, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const [selectedDate, setSelectedDate] = useState('');

  const handleDateClick = useCallback((arg: DateClickArg) => {
    console.log('Date Clicked!')
    setSelectedDate(arg.dateStr);
    setShowInput(true);
  }, []);

  return (
    <div>
      <FullCalendar 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
        initialView="dayGridMonth"
        locales={[jaLocale]}         
        locale='ja'              
        headerToolbar={{                          
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek',
        }}  
        dateClick={handleDateClick}
      />
      {showInput && (
        <label>
          <input type="text" placeholder={`選択した日付: ${selectedDate}`} />
        </label>
      )}
    </div>
  );
}

export default App;