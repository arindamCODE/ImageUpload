import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ImageUploadModule } from "angular2-image-upload";
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { SimplemdeModule, SIMPLEMDE_CONFIG } from 'ng2-simplemde';

import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  { path: '', redirectTo: '/up', pathMatch: 'full' },
  { path: 'up', component: UploadComponent },
  /* { path: 'forms', component: FormsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'newspack', component: NewspackComponent } */
];


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent
  ],
  imports: [
    SimplemdeModule.forRoot({
      provide: SIMPLEMDE_CONFIG
      // config options 1
      //useValue: $options1
    }),
    BrowserModule,
    FormsModule,
    ImageUploadModule.forRoot(),
    RouterModule.forRoot(routes),
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
