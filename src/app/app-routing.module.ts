import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreloadingStrategyService } from 'src/services/PreloadStrategyService';
import { MetaAntiIcing } from './modules/open-graph/warmehaus/meta-data-antiIcing';
import { MetaCab14Watt } from './modules/open-graph/warmehaus/meta-data-cab-14Watt';
import { MetaCab20Watt } from './modules/open-graph/warmehaus/meta-data-cab-20Watt';
import { MetaFilms } from './modules/open-graph/warmehaus/meta-data-cab-metaFilms';
import { MetaMat160 } from './modules/open-graph/warmehaus/meta-data-cab-metaMat160';
import { MetaMat200 } from './modules/open-graph/warmehaus/meta-data-cab-metaMat200';
import { MetaTermostats } from './modules/open-graph/warmehaus/meta-data-cab-metaTernostats';
import { MetaContacts } from './modules/open-graph/warmehaus/meta-data-contacts';
import { MetaInstructionsPage } from './modules/open-graph/warmehaus/meta-data-instructions';
import { MetaSrartPage } from './modules/open-graph/warmehaus/meta-data-startPage';
import { MetaWarmehaus } from './modules/open-graph/warmehaus/meta-data-warmehaus';

const metaStartPage: MetaSrartPage = new MetaSrartPage();
const metaContacts: MetaContacts = new MetaContacts();
const metaInstructions: MetaInstructionsPage = new MetaInstructionsPage();
const metaWarmehaus: MetaWarmehaus = new MetaWarmehaus();
const meta160Watt: MetaMat160 = new MetaMat160();
const meta200Watt: MetaMat200 = new MetaMat200();
const metaCab14W: MetaCab14Watt = new MetaCab14Watt();
const metaCab20W: MetaCab20Watt = new MetaCab20Watt();
const metaFilms: MetaFilms = new MetaFilms();
const metaAntiIcing: MetaAntiIcing = new MetaAntiIcing();
const metaTermostats: MetaTermostats = new MetaTermostats();

const routes: Routes = [
  {
    path: 'home/contacts',
    loadChildren: () => import('./body-part/contacts/contacts.module').then(m => m.ContactsModule),
    data: { title: metaContacts.ogTitleContent, description: metaContacts.descriptionContent }
  },
  {
    path: '',
    loadChildren: () => import('./body-part/start-page/start-page.module').then(m => m.StartPageModule),
    data: { title: metaStartPage.ogTitleContent, description: metaStartPage.descriptionContent }
  },
  {
    path: 'home/instructions',
    loadChildren: () => import('./body-part/info/info.module').then(m => m.InfoModule),
    data: { title: metaInstructions.ogTitleContent, description: metaInstructions.descriptionContent }
  },
  {
    path: 'warmehaus',
    loadChildren: () => import('./body-part/warmehaus/main-page/main-page.module').then(m => m.MainPageModule), data: {
      title: metaWarmehaus.ogTitleContent, description: metaWarmehaus.descriptionContent,
    }
  },
  {
    path: 'warmehaus/mat-160Watt',
    loadChildren: () => import('./body-part/warmehaus/warming-mat160-w/warming-mat160-w.module').then(m => m.WarmingMat160WModule), data: {
      title: meta160Watt.ogTitleContent, description: meta160Watt.descriptionContent,
    }
  },
  {
    path: 'warmehaus/mat-200Watt',
    loadChildren: () => import('./body-part/warmehaus/warming-mat200-w/warming-mat200-w.module').then(m => m.WarmingMat200WModule), data: {
      title: meta200Watt.ogTitleContent, description: meta200Watt.descriptionContent,
    }

  },
  {
    path: 'warmehaus/cable-14Watt',
    loadChildren: () => import('./body-part/warmehaus/cab14-w/cab14-w.module').then(m => m.Cab14WModule), data: {
      title: metaCab14W.ogTitleContent, description: metaCab14W.descriptionContent,
    }
  },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  // { path: 'contacts', redirectTo: 'home/contacts', pathMatch: 'full' },
  // { path: 'info', redirectTo: 'home/instructions', pathMatch: 'full' },
  // { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // https://codinglatte.com/posts/angular/lazy-loading-modules-preloading-strategy-in-angular-8/
      preloadingStrategy: PreloadingStrategyService,
      // PreloadAllModules, TODO: Check on render
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
  providers: [PreloadingStrategyService,
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
})
export class AppRoutingModule { }
