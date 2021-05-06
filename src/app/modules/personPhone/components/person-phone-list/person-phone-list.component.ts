import { Component, OnInit } from '@angular/core';
import { mockPerson } from '../../../person/mocks/person.mock';
import { Person } from '../../../person/models/person.model';
import { PersonPhone } from '../../models/personPhone.model';

@Component({
  selector: 'app-person-phone-list',
  templateUrl: './person-phone-list.component.html',
  styleUrls: ['./person-phone-list.component.css']
})
export class PersonPhoneListComponent implements OnInit {

  constructor() { }

  listOfPerson: Array<Person> = mockPerson;

  ngOnInit() {
  }


  getInTouch(phone: string) {
    window.open(`https://wa.me/${phone}`, '_blank')
  }



}
