import React from 'react'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import ptBrLocale from "@fullcalendar/core/locales/pt-br"

import 'tippy.js/dist/tippy.css';
import Tippy from "@tippyjs/react";
import 'tippy.js/themes/light.css';

import './FullCalendar.css'
import FullCalendarHover from './FullCalendarHover'

function renderEventContent(eventInfo) {
  // console.log("###############",eventInfo)
  
  return (
    <>
    <Tippy content={<FullCalendarHover  data={eventInfo.event}/>} placement='bottom-end' theme='light'
     arrow={false} interactive={true}  inlinePositioning= {true} zIndex= {99999} 
     appendTo= {document.body} >
    <div className="fc-event-main">
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </div>
    </Tippy>
    </>
  )
}

class MyFullCalendar extends React.Component {

  
    myEvents =   [{
    start: "12-02-2023h06:00:00",
    end: "12-02-2023h08:00:00",
    title: "1",
    id:'1',
    color:"cyan",
    groupId:[ 1, 2 ,4]
  },
    {
    start: "13-02-2023h10:00:00",
    end: "13-02-2023h12:30:00",
    title: "2",id:'2',color:"pink"
    ,groupId:[5,1,2]
  },
    
    {
    start: "14-02-2023h11:00:00",
    end: "14-02-2023h12:30:00",
    title: "3",id:'3',color:"black",
    groupId:[2,5,6]
  },
    
    {
    start: "15-02-2023h06:00:00",
    end: "15-02-2023h09:30:00",
    title: "4",id:'4'
  ,groupId:[5,7,8]},
    {
    start: "16-02-2023h14:00:00",
    end: "16-02-2023h15:00:00",
    title: "5",id:'5',
    groupId:[3,5,7]},
    {
      start: "17-02-2023h06:00:00",
      end: "17-02-2023h08:00:00",
      title: "4",
      id:'6',
      color:"red",
      groupId:[8,4]
    },
    {
      start: "18-02-2023h06:00:00",
      end: "18-02-2023h07:30:00",
      title: "3",
      id:'7',
      color:"purple",
      groupId:[1,2]
    },
    {
      start: "19-02-2023h09:00:00",
      end: "19-02-2023h10:00:00",
      title: "1",
      id:'8',
      color:"orange",
      groupId:[2,3,5,4]
    },
    {
      start: "20-02-2023h10:00:00",
      end: "20-02-2023h14:30:00",
      title: "2",
      id:'9',
      color:"grey",
      groupId:[7]
    }
    ]

  state = {
      date: null,
     time:null

 }
  componentDidMount() {
      var mon_array = new Array();
      mon_array[0] = "Janeiro";
      mon_array[1] = "Fevereiro";
      mon_array[2] = "Março";
      mon_array[3] = "Abril";
      mon_array[4] = "Maio";
      mon_array[5] = "Junho";
      mon_array[6] = "Julho";
      mon_array[7] = "Agosto";
      mon_array[8] = "Setembro";
      mon_array[9] = "Outubro";
      mon_array[10] = "Novembro";
      mon_array[11] = "Dezembro"
      var dateObj = new Date();
      var month = dateObj.getUTCMonth() ; //months from 1-12
      var day = dateObj.getUTCDate();
      var year = dateObj.getUTCFullYear();

      const newdate =  day+' '+ mon_array[month]+ ', ' +year;
      
      this.setState({date:newdate})

      var today = new Date();
      var time = today.getHours()
      this.setState({time:time})
  }


  render() {
    function handleDateClick(info){
      // console.log(info.event.groupId)
      info.jsEvent.preventDefault();
    }
  
    return (
        <div style={{scrollbarGutter:'stable'}}  >
          <FullCalendar
            locale={ptBrLocale}
            plugins={[dayGridPlugin, timeGridPlugin]}
            headerToolbar={{
              center: 'prev today next',
              left: 'myCustomButton',
              right: 'timeGridWeek,dayGridMonth'
            }}

            dayHeaderFormat={{ weekday: 'short',day: 'numeric',omitCommas: true }}
            customButtons={{
              myCustomButton:{
                text: this.state.date  }
                
            }}
           
            initialView='timeGridWeek'
            events={this.myEvents}
            eventClick = {(info)=>{handleDateClick(info)}}
            eventContent={renderEventContent}
            height= '500px'
            allDaySlot= {false}
            nowIndicator={true}
            businessHours={{
              daysOfWeek: [ 0,1, 2, 3, 4,5,6 ], //all days of a weeek

              startTime: '06:00', // a start time (10am in this example)
              endTime: '15:00',
            }}
            
            // slotDuration={'01:00:00'}
            slotLabelInterval={'02:00'}
            slotMinTime={'06:00:00'}
            slotMaxTime={'15:00:00'}
            // Duration = {{hours:2}}
            // contentHeight= '100'
            // aspectRatio='4'

          />
        </div>
      
    )
  }
}

export default MyFullCalendar;