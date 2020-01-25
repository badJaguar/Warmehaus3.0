import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CdkTableModule } from '@angular/cdk/table';
import { CdkTreeModule } from '@angular/cdk/tree';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { PhonesSheetComponent } from './footer-part/phones-sheet/phones-sheet.component';
import { FooterComponent } from './footer-part/footer/footer.component';
import { ToolbarComponent } from './header-part/toolbar/toolbar.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { HeaderMenuComponent } from './header-part/header-menu/header-menu.component';
import { SchemaMarkupComponent } from './seo/schema-markup/schema-markup.component';
import { BreadcrumbsComponent } from './header-part/breadcrumbs/breadcrumbs.component';
import { NgxJsonLdModule } from 'ngx-json-ld';
import { MaterialShareModule } from './modules/material-share/material-share.module';
import { FlexLayoutModule, BREAKPOINT } from '@angular/flex-layout';
import { GtagModule } from 'angular-gtag';
import { SafeHtmlPipe } from './safe-html';
import { CookieService } from 'ngx-cookie-service';
import { ChipsComponent } from './header-part/chips/chips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PinchZoomModule } from 'ngx-pinch-zoom';


const EXTRA_BREAKPOINTS = [{
  alias: 'xs.landscape',
  suffix: 'XsLandscape',
  mediaQuery: 'screen and (orientation: landscape) and (max-width: 559px)',
  priority: 1000,
  overlapping: false
}];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    PhonesSheetComponent,
    HeaderMenuComponent,
    SchemaMarkupComponent,
    BreadcrumbsComponent,
    ChipsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    // https://github.com/angular/flex-layout
    FlexLayoutModule.withConfig({
      useColumnBasisZero: false,
      ssrObserveBreakpoints: ['xs', 'lt-md'],
      printWithBreakpoints: ['md', 'lt-lg', 'lt-xl', 'gt-sm', 'gt-xs']
    }),
    GtagModule.forRoot({ trackingId: 'UA-139924647-1', trackPageviews: true }),
    AppRoutingModule,
    CommonModule,
    NgtUniversalModule,
    CdkTableModule,
    CdkTreeModule,
    OverlayModule,
    ScrollingModule,
    NgxJsonLdModule,
    MaterialShareModule,
    PinchZoomModule
  ],
  entryComponents: [PhonesSheetComponent],
  exports: [],
  providers: [Title, CookieService, SafeHtmlPipe,
    {
      provide: BREAKPOINT,
      useValue: EXTRA_BREAKPOINTS,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
