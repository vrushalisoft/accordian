import { Component, ViewChild } from '@angular/core';
import { Accordion } from 'src/app/shared/model/accordion.model';
import { AccordionService } from 'src/app/shared/services/accordion.service';

@Component({
  selector: 'app-accordion-form',
  templateUrl: './accordion-form.component.html',
  styleUrls: ['./accordion-form.component.css']
})
export class AccordionFormComponent {
  isNewSection : boolean = true;
  @ViewChild('myForm')  myFormObj : any;


  constructor(private accordionServe : AccordionService){  }
  ngOnInit(): void {

  }

  onSubmit(){

    let section = this.myFormObj.value;
    let sectionObj = new Accordion(section.name, section.data)
    console.log(sectionObj)
    if(this.isNewSection){
      this.accordionServe.addNewAccordionToList(sectionObj);
    }
    this.myFormObj.reset();

  }

}
