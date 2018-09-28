import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css'],
  providers: [MessageService]
})
export class ToastComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.interval();
  }

  interval() {
    let time =  Math.random()*10000;
    setInterval(() => this.showSuccess(), console.log(time), time);
  }

  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
  }


}
