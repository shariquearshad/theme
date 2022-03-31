import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-theme-setting',
  templateUrl: './theme-setting.component.html',
  styleUrls: ['./theme-setting.component.scss']
})
export class ThemeSettingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  item={
    name:"description",
    enabled:"true"
  }
  bodheeThemeSchemes=[{
    id:1,
    name : "Bodhee Light",
    colorConfig:{
      active_color :"#ffb84a",
      background_color : "#e5e5e5",
      panel_color : "#fff",
      text_color : "black",
      primary_color:'#ffb84a'
    }
  },{
    id:2,
    name : "Bodhee Dark",
    colorConfig:{
      active_color :"#ffb84a",
      background_color : "#202634",
      panel_color : "#293042",
      text_color : "#d4d6d9",
      primary_color:'#ffb84a'

    }
  },
  {
    id:3,
    name : "Custom 1",
    colorConfig:{
      active_color :"#ff0000",
      background_color : "#e5e5e5",
      panel_color : "#fff",
      text_color : "black",
      primary_color:'#ffb84a'
    }
  },{
    id:4,
    name : "Custom 2",
    colorConfig:{
      active_color :"#ee4848",
      background_color : "#202634",
      panel_color : "#293042",
      text_color : "#d4d6d9",
      primary_color:'#ffb84a'
    }
  },{
    id:5,
    name : "Custom 3",
    colorConfig:{
      active_color :"#2196f3",
      background_color : "#202634",
      panel_color : "#293042",
      text_color : "#d4d6d9",
      primary_color:'#ffb84a'
    }
  },{
    id:6,
    name : "Custom 4",
    colorConfig:{
      active_color :"#9c27b0",
      background_color : "#202634",
      panel_color : "#293042",
      text_color : "#d4d6d9",
      primary_color:'#ffb84a'
    }
  }];
  public activeTheme=this.bodheeThemeSchemes[0];
  public active_index=0
  setTheme(index:any) {
   
    this.activeTheme=this.bodheeThemeSchemes[index];
   // this.active_index=index
   // console.log(this.activeTheme)
  }
  addTheme(){
    console.log("event triggrted in parent component")
  //  console.log(theme);
  }
  handleChangeComplete(event:any){
    console.log(event);
  }

}
