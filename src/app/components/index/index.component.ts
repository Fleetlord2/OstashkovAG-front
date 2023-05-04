import { Component } from '@angular/core';
import { TodayEvent } from 'src/app/interfaces/today-event';
import { News } from 'src/app/interfaces/news';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  date: Date = new Date();
  idDate = 0;
  todayEvent: TodayEvent = 
    {
      id: 1,
      title: 'День Колбаса',
      description: 'Встречайте, день, который вы все так ждали и наконец он наступил! День легендарного бузулургского колбаса! Всех желающих накормят колбасками и ознакомят с нашей не менее легендарной рекламой! Вход свободный!',
      date: new Date(),
      timeStart: '12.40',
      timeFinish: '14.50',
      location: 'ул. Рузинская д. 9',
      image: '',
      type: ''
    }

  eventOnDate: TodayEvent = 
    {
      id: 0,
      title: '',
      description: '',
      date: new Date(),
      timeStart: '',
      timeFinish: '',
      location: '',
      image: '',
      type: ''
    }

  news : News[] = [
    {
      id: 1,
      title: 'День Огурца 1',
      description: 'День Огурца 1',
      date: '0:01',
      type: ''
    },
    {
      id: 2,
      title: 'День Огурца 2',
      description: 'Посередине второй улицы дед на волге заглох, перекрыв тем самым всю улицу.',
      date: '0:14',
      type: 'Срочно'
    },
    {
      id: 3,
      title: 'День Огурца 3',
      description: 'Дед справился с волгой',
      date: '2:17',
      type: ''
    }
  ];

  onDayEvent: TodayEvent ={
    id: 0,
    title: 'День Огурца',
    description: 'День Огурца',
    date: new Date(),
    timeStart: '12:40',
    timeFinish: '15:30',
    location: 'Ул. Наприколе д 9',
    image: '',
    type: ''
  }

  onValueChange(value: Date): void {
    console.log(`Current value: ${value}`);
    this.date = value;
    
  }

  onPanelChange(change: { date: Date; mode: string }): void {
    console.log(`Current value: ${change.date}`);
    console.log(`Current mode: ${change.mode}`);
  }

  showEventOnDate (date: Date){
    if (this.eventOnDate.id == 0)
      return true;
    return false;
  }

}
