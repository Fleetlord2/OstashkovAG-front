import { Component } from '@angular/core';
import { TodayEvent } from 'src/app/interfaces/today-event';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {

  todayEvent: TodayEvent = {
    id: 1,
    title: 'День Колбаса',
    description: 'луалымктлв жд тсщлыущзмзыкмщлыь ыкзмьуфзлсыьмлзыкьмзыку уащзымы молымз',
    date: new Date(),
    timeStart: '12.40',
    timeFinish: '14.50',
    location: 'ул. Рузинская д. 9',
    image: '',
    type: ''
  }

  events: TodayEvent[] = [
    {
      id: 1,
    title: 'День Колбаса',
    description: 'луалымктлв жд тсщлыущзмзыкмщлыь ыкзмьуфзлсыьмлзыкьмзыку уащзымы молымз',
    date: new Date(),
    timeStart: '12.40',
    timeFinish: '14.50',
    location: 'ул. Рузинская д. 9',
    image: '',
    type: ''
    },
    {
      id: 2,
    title: 'День Колбаса',
    description: 'луалымктлв жд тсщлыущзмзыкмщлыь ыкзмьуфзлсыьмлзыкьмзыку уащзымы молымз',
    date: new Date(),
    timeStart: '12.40',
    timeFinish: '14.50',
    location: 'ул. Рузинская д. 9',
    image: '',
    type: ''
    },
    {
      id: 3,
    title: 'День Колбаса',
    description: 'луалымктлв жд тсщлыущзмзыкмщлыь ыкзмьуфзлсыьмлзыкьмзыку уащзымы молымз',
    date: new Date(),
    timeStart: '12.40',
    timeFinish: '14.50',
    location: 'ул. Рузинская д. 9',
    image: '',
    type: ''
    },
    {
      id: 4,
    title: 'День Колбаса',
    description: 'луалымктлв жд тсщлыущзмзыкмщлыь ыкзмьуфзлсыьмлзыкьмзыку уащзымы молымз',
    date: new Date(),
    timeStart: '12.40',
    timeFinish: '14.50',
    location: 'ул. Рузинская д. 9',
    image: '',
    type: ''
    }
  ]
}
