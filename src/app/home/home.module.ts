import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from '../header/header.component';
import { SurpriseSectionComponent } from '../surprise-section/surprise-section.component';
import { HowItWorksComponent } from '../how-it-works/how-it-works.component';
import { FooterComponent } from '../footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, HeaderComponent, SurpriseSectionComponent, HowItWorksComponent, FooterComponent]
})
export class HomePageModule {}
