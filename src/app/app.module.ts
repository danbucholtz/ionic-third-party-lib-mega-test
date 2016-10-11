import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

// import breeze from 'breeze-client';
// console.log('breezy: ', breeze);

import libphonenumber from 'google-libphonenumber';
console.log('libphonenumber: ', libphonenumber);

import pouchdb from 'pouchdb';
console.log('pouchdb:', pouchdb);

import moment from 'moment';
import momentTz from 'moment-timezone';
console.log('momentTz: ', momentTz);
var jun = moment("2014-06-01T12:00:00Z");
console.log('momentTZ result: ' + jun.tz('America/Los_Angeles').format('ha z'));

// import parse from 'parse';
// console.log('parse: ', parse);

// import kinvey from 'kinvey-angular2-sdk';
// console.log('kinvey: ', kinvey);

// import apollo from 'apollo-client';
// console.log('apollo: ', apollo);

// import { MomentModule } from 'angular2-moment';
// console.log('MomentModule: ', MomentModule);

import {CordovaOauth, Facebook, Google} from 'ng2-cordova-oauth/core';
console.log('CordovaOauth: ', CordovaOauth);
console.log('Facebook: ', Facebook);
console.log('Google: ', Google);

import { Resource, ResourceParams, ResourceAction } from 'ng2-resource-rest';
console.log('Resource: ', Resource);
console.log('ResourceParams: ', ResourceParams);
console.log('ResourceAction: ', ResourceAction);

import lodash from 'lodash';
console.log('lodash: ', lodash);

import immutable from 'immutable';
console.log('immutable: ', immutable);

import * as d3 from 'd3';
console.log('d3: ', d3);

import * as three from 'three';
console.log('three: ', three);

import tween from 'tween.js';
console.log('tween: ', tween);

import lunr from 'lunr';
console.log('lunr: ', lunr);

import * as wysihtml from 'wysihtml';
console.log('wysihtml: ', wysihtml);

import chart from 'chart.js';
console.log('chart.js: ', chart);

import underscore from 'underscore';
console.log('underscore: ', underscore);

import skrollr from 'skrollr';
console.log('skrollr: ', skrollr);

import leaflet from 'leaflet';
console.log('leaflet: ', leaflet);

import hammerjs from 'hammerjs';
console.log('hammerjs: ', hammerjs);

import azureMobileClient from 'azure-mobile-apps-client';
console.dir(azureMobileClient);

// import intl from 'intl';
// console.log('intl: ', intl);

import * as webAnimation from 'web-animations-js';
console.log('webAnimation: ', webAnimation);

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: []
})
export class AppModule {}