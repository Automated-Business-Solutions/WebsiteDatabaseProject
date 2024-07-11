import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import {provideFirebaseApp, initializeApp } from '@angular/fire/app'
import {provideAuth, getAuth} from '@angular/fire/auth'
 

const firebaseConfig = {
  apiKey: "AIzaSyDmT37uFqvxJpDkYty4eV1fROYMxueLd9M",
  authDomain: "newdatabase-2fb6b.firebaseapp.com",
  projectId: "newdatabase-2fb6b",
  storageBucket: "newdatabase-2fb6b.appspot.com",
  messagingSenderId: "374255576194",
  appId: "1:374255576194:web:24c073e1278711e06e409b",
  measurementId: "G-9VP12RWSFR"
};  

export const appConfig: ApplicationConfig = {
  providers: [
      provideRouter(routes), 
      provideHttpClient(),
      importProvidersFrom([
          provideFirebaseApp(() => initializeApp(firebaseConfig)),
          provideAuth(() => getAuth())
        ]),

  ],
};
