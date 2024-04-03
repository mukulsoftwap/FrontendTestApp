import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { SurpriseSectionComponent } from '../../components/surprise-section/surprise-section.component';
import { HowItWorksComponent } from '../../components/how-it-works/how-it-works.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { StepCardComponent } from '../../components/step-card/step-card.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, SurpriseSectionComponent, HowItWorksComponent, FooterComponent, StepCardComponent]
})
export class HomePageModule {}
