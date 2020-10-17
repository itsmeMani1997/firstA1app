import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material';
import{MatSelectModule,MatAutocompleteModule,MatCheckboxModule,MatSlideToggleModule}from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {MatTabsModule} from '@angular/material/tabs';
import{MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import { MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { MatTableModule } from '@angular/material/table';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import {A11yModule} from '@angular/cdk/a11y';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ShoppingbagComponent } from './shoppingbag/shoppingbag.component';
import { TShirtsComponent } from './t-shirts/t-shirts.component';
import { RoadsterComponent } from './roadster/roadster.component';
import { LoginComponent } from './login/login.component';







@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WishlistComponent,
    ShoppingbagComponent,
    TShirtsComponent,
    RoadsterComponent,
    LoginComponent,

],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,ReactiveFormsModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,MatAutocompleteModule,MatCheckboxModule,MatSlideToggleModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTabsModule,
    MatExpansionModule,
    MatMenuModule,
    MatCardModule,
    MatBottomSheetModule, MatTableModule ,
    DragDropModule,PortalModule,ScrollingModule,CdkStepperModule,CdkTableModule,CdkTreeModule,
    FontAwesomeModule,A11yModule,MatCarouselModule ,NgbModule,MatGridListModule,MatRadioModule,MatTooltipModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[]
})
export class AppModule { }
