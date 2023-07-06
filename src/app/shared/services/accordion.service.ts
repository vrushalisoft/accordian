import { BehaviorSubject } from "rxjs";
import { Accordion } from "../model/accordion.model";

export class AccordionService{

  private DataList = [
    new  Accordion('Section 1', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore id ipsam quasi amet delectus! Repellat labore provident ut omnis, corrupti praesentium tempore ad quibusdam vel. Amet corrupti earum cum ratione quae inventore, excepturi eligendi exercitationem! Cum dolor sed beatae!'),
    new  Accordion('Section 2', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore id ipsam quasi amet delectus! Repellat labore provident ut omnis, corrupti praesentium tempore ad quibusdam vel. Amet corrupti earum cum ratione quae inventore, excepturi eligendi exercitationem! Cum dolor sed beatae!'),
    new  Accordion('Section 3','Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore id ipsam quasi amet delectus! Repellat labore provident ut omnis, corrupti praesentium tempore ad quibusdam vel. Amet corrupti earum cum ratione quae inventore, excepturi eligendi exercitationem! Cum dolor sed beatae!')
  ];

  accordSub = new BehaviorSubject(this.DataList.slice());

  getAccordList(){
    return this.DataList.slice();
  }

  addNewAccordionToList( newContent :  Accordion){
    this.DataList.push(newContent)
    this.accordSub.next(this.DataList.slice())
  }
}
