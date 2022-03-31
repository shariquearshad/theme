import { Component, OnInit,Input,OnChanges } from '@angular/core';


@Component({
  selector: 'app-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.scss']
})
export class PreviewComponent implements OnInit,OnChanges  {
  @Input('parentData') public activeTheme:any;
  public active_color:any;
  public background_color:any;
  public panel_color:any;
  public text_color:any;
  public primary_color:any;
 
  constructor() {
    //this.active_color=this.activeTheme.colorConfig.active_color
   }
   ngOnChanges(){
    // console.log(this.activeTheme)
    this.active_color=this.activeTheme.colorConfig.active_color;
    this.background_color=this.activeTheme.colorConfig.background_color;
    this.panel_color=this.activeTheme.colorConfig.panel_color;
    this.text_color=this.activeTheme.colorConfig.text_color;
    this.primary_color=this.activeTheme.colorConfig.primary_color;
     
   }
   

  ngOnInit(): void {
    
     this.active_color=this.activeTheme.colorConfig.active_color;
     this.background_color=this.activeTheme.colorConfig.background_color;
     this.panel_color=this.activeTheme.colorConfig.panel_color;
     this.text_color=this.activeTheme.colorConfig.text_color;
     this.primary_color=this.activeTheme.colorConfig.primary_color;
   // console.log(this.active_color)
  }

}
