import { Component } from '@angular/core';
import { Appointement } from '../models/appointement';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-appointement-list',
  templateUrl: './appointement-list.component.html',
  styleUrls: ['./appointement-list.component.css']
})
export class AppointementListComponent implements OnInit {

  newAppointementTitle: string = "";
  newAppointementDate: Date = new Date();
  appointements: Appointement[] = []

  ngOnInit(): void {
    let savedAppointement = localStorage.getItem("appointements");
    this.appointements = savedAppointement ? JSON.parse(savedAppointement) : []
  }

  addAppointement() {
    if (this.newAppointementTitle.trim().length && this.newAppointementDate) {
      let newAppointement: Appointement = {
        id: Date.now(),
        title: this.newAppointementTitle,
        date: this.newAppointementDate
      }
      this.appointements.push(newAppointement);

      this.newAppointementTitle = "";
      this.newAppointementDate = new Date();

      localStorage.setItem("appointements", JSON.stringify(this.appointements))
    }
  }

  deleteAppointement(id: number) {
    this.appointements.splice(id, 1)
    localStorage.setItem("appointements", JSON.stringify(this.appointements))
  }
}