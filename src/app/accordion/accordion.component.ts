
import { Component } from '@angular/core';
import { AccordionService } from '../shared/services/accordion.service';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  providers : [ AccordionService ]
})
export class AccordionComponent {

}
