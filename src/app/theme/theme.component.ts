import { Component, OnInit,Input,EventEmitter,Output } from '@angular/core';
import {ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
//import { ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss']
})
export class ThemeComponent implements OnInit {
  @Input('parentData') public themes:any;
  @Input('parentData2') public active_index:any;
  @Output() public childEvent=new EventEmitter<number>();
  @Output() public addTheme=new EventEmitter<object>();
  public currentIndex:any
  public closeResult:any
  public newTheme:any
  public colorStrip:string[]; 
   
  activeColorStrip:any
  
  
  
  

  constructor( 
    private modalService:NgbModal
  ) { 
    this.colorStrip=["active_color","background_color",
                      "panel_color","primary_color","text_color"]
    
  }
  

  ngOnInit(): void {
    //console.log(this.themes)
    this.currentIndex=this.active_index
    console.log(this.currentIndex)
    //console.log( "current index is"+ this.currentIndex)
    
  }
  colorChange(color:any){
    console.log("changing")
    console.log(color)
    
  }
  changeColorIndex(value:any){
    console.log("value recieved is "+value)
    this.activeColorStrip=value
    console.log(this.colorStrip[this.activeColorStrip])
  }
  deleteItem(id:any){
    console.log("delete is triggered with index");
    this.themes=this.themes.filter((index:any)=>{
      console.log(index);
      console.log(id)
      return index.id!==id}
      )
    console.log(this.themes)
  }
  arrayTheme(theme:any){
  console.log("active color is"+this.colorStrip[this.activeColorStrip])
    //this.activeColorStrip=theme.
   // console.log(this.colorStripArray)
  }
  changeComplete(event:any){
    console.log(event.color.hex)
    let changecolor=this.colorStrip[this.activeColorStrip]
    console.log("the change should be applied to "+changecolor)
    this.newTheme.colorConfig[changecolor]=event.color.hex
    console.log("the value is "+ this.newTheme.colorConfig[changecolor])
    
    
  }
  editItem(id:any){
    console.log("edit is triggered with index " + id)
    let editTheme:any=this.themes.find((index:any)=>id===index.id)
    console.log(editTheme)

  }
  changeTheme(index:any){
    //console.log(index);
    this.currentIndex=index;
    console.log(this.currentIndex)
    this.childEvent.emit(index)
  }
  addNewTheme(theme:any){
    console.log("add new theme triggered");
    let ReplaceIndex=this.themes.findIndex((itm:any)=>itm.id===theme.id);
    console.log(ReplaceIndex)
    if(ReplaceIndex>=0){
      this.themes[ReplaceIndex]=theme
      
      
    }
    else{
      this.themes.push(theme)
    }
    
    this.addTheme.emit(theme)
    
    console.log(this.themes)
    
  }
  
 
  open(content:any,id:any) {
    let index=this.themes.findIndex((itm:any)=>itm.id===id);

    if(index>=0){
      //this.newTheme= new this.themes.find((index)=>index.id===id)
      
      this.newTheme = JSON.parse(JSON.stringify(this.themes[index]))
    
    }
    else{
     //this.newTheme={...this.themes[0]}
     this.newTheme = JSON.parse(JSON.stringify(this.themes[this.active_index]))
     
     this.newTheme.id=(this.themes[this.themes.length-1].id)+1
     this.newTheme.name="custom "+((this.themes.length)-1)
    
    }
    this.activeColorStrip=0;
    this.arrayTheme(this.newTheme)
    //console.log(this.newTheme)
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult)
      if(result==="Save click"){
      this.addNewTheme(this.newTheme);
      }
    }, (reason:any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

}
