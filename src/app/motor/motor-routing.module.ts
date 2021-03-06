import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from '@app/motor/layout.component';
import { ListingComponent } from '@app/shared/components/listing/listing.component';
import { CarComponent } from './car/car.component';
import { ThirdPartyComponent } from './third-party/third-party.component';
import { TwoWheelerComponent } from './two-wheeler/two-wheeler.component';
const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'car-insurance', component: CarComponent },
      { path: 'two-wheeler-insurance', component: TwoWheelerComponent },
      { path: 'third-party-insurance', component: ThirdPartyComponent },
      { path: 'car-insurance/listing', component: ListingComponent },
      { path: 'third-party-insurance/listing', component: ListingComponent },
      { path: 'two-wheeler-insurance/listing', component: ListingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MotorRoutingModule { }
