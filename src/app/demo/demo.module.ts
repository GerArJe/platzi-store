import { NgModule } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';
import { SharedModule } from '../shared/shared.module';
import { DemoRoutingModule } from './demo-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DemoComponent],
  imports: [CommonModule, SharedModule, DemoRoutingModule, FormsModule],
})
export class DemoModule {}
