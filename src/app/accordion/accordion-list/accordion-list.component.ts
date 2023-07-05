import { Component, OnInit } from '@angular/core';
import { Accordion } from 'src/app/shared/model/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion.service';

@Component({
  selector: 'app-accordion-list',
  templateUrl: './accordion-list.component.html',
  styleUrls: ['./accordion-list.component.css']
})
export class AccordionListComponent implements OnInit {
  accordianList  : Accordion[] = [];

  constructor(private accordServe : AccordionService){}

  ngOnInit(): void {
    this.accordianList = this.accordServe.getShoppingList();
    this.accordServe.accordSub.subscribe({
      next : (updatedList : Accordion[] | any) => {
      this.accordianList = updatedList;
      }
    })
  }
}
