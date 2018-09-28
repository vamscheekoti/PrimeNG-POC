import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Services import
import { CarService } from './table/table.service';

// Components import
import { TableComponent } from './table/table.component';
import { ImagesComponent } from './images/images.component';
import { DialogComponent } from './dialog/dialog.component';
import { MenuComponent } from './menu/menu.component';
import { ChartComponent } from './chart/chart.component';
import { PieComponent } from './chart/pie/pie.component';
import { BarComponent } from './chart/bar/bar.component';
import { LineComponent } from './chart/line/line.component';
import { SimpleMenuComponent } from './menu/simple-menu/simple-menu.component';

// Prime NG Modules import
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { GalleriaModule } from 'primeng/galleria';
import { DialogModule } from 'primeng/dialog';
import { MegaMenuModule } from 'primeng/megamenu';
import { ChartModule } from 'primeng/chart';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { SignalComponent } from './signal/signal.component';
import { ToastComponent } from './toast/toast.component';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ImagesComponent,
    DialogComponent,
    MenuComponent,
    ChartComponent,
    PieComponent,
    BarComponent,
    LineComponent,
    SimpleMenuComponent,
    SignalComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    TabViewModule,
    GalleriaModule,
    DialogModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    MegaMenuModule,
    ChartModule,
    MenubarModule,
    ToastModule
  ],
  providers: [CarService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
