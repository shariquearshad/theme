import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'
import { ColorSketchModule } from 'ngx-color/sketch';



import { AppComponent } from './app.component';
import { ThemeComponent } from './theme/theme.component';
import { PreviewComponent } from './preview/preview.component';

import { ThemeSettingComponent } from './theme-setting/theme-setting.component';

@NgModule({
  declarations: [
    AppComponent,
    ThemeComponent,
    PreviewComponent,
    ThemeSettingComponent,
    
  
  ],
  imports: [
    BrowserModule,
    NgbModule,
    ColorSketchModule
    
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
