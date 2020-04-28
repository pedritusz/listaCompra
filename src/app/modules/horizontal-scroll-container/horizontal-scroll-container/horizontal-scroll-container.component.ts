import { Component, OnInit, Input } from '@angular/core';
import { HorizontalScrollContainerInterface } from 'src/app/interfaces/horizontal-scroll-container';

@Component({
  selector: 'app-horizontal-scroll-container',
  templateUrl: './horizontal-scroll-container.component.html',
  styleUrls: ['./horizontal-scroll-container.component.scss']
})
export class HorizontalScrollContainerComponent implements OnInit {
  status = 'initial';
  @Input()hscOptions?:HorizontalScrollContainerInterface;
  constructor() { }

  ngOnInit(): void {
  }
  
  public toSecondary(){
   
    switch (this.status) {
      case 'initial':
        this.status = 'secondary';

        break;
      
      case 'secondary':
        
        this.status = 'primary';

        break;
      case 'primary':
      
        this.status = 'secondary';

        break;
    
      default:
      
        break;
    }
    

  }
}
