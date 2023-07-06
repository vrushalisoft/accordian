export class Accordion{
  header :string;
  content : string;
  constructor(public name : string, public data : string){
    this.header =name;
    this.content = data;
  }
}
