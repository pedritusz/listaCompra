import { Component, OnInit, Input } from '@angular/core';
import { SectionItemInterface } from 'src/app/interfaces/section-item-interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-section-item',
  templateUrl: './section-item.component.html',
  styleUrls: ['./section-item.component.scss']
})
export class SectionItemComponent implements OnInit {

  @Input() public options: SectionItemInterface;

  constructor(
  private  ruter: Router
  ) { }

  ngOnInit(): void {
  }

}
