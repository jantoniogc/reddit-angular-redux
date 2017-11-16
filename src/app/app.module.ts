import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';

import { PostsService } from './posts.service';

import { AppReducer } from './../redux/app.reducer';
import { PostEffects } from './../redux/post/post.effects';
import { SelectedEffects } from './../redux/selected/selected.effects';
import { PostComponent } from './post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    PostComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot( AppReducer ),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    }),
    EffectsModule.forRoot([
      PostEffects,
      SelectedEffects
    ])
  ],
  providers: [ PostsService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
