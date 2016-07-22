import { bootstrap }    from '@angular/platform-browser-dynamic';

import { AppComponent } from './components/app.component';

import { HTTP_PROVIDERS } from "@angular/http"

import { ROUTER_PROVIDERS } from '@angular/router-deprecated';

import {disableDeprecatedForms, provideForms} from '@angular/forms'

bootstrap(AppComponent, [disableDeprecatedForms(),
                         provideForms(),
                         HTTP_PROVIDERS, 
                         ROUTER_PROVIDERS]);