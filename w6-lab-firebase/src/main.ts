//4/0AVG7fiRmFiGC7NDYSS4RMGd0ur51uC3z3TLsq4VRbqyEXhzzej6mVO7XbhqX7AbcLdCFdA
//code

import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => initializeApp({
      projectId: "fir-ionic-project-dc52e",
      appId: "1:769063483414:web:0b402d09efd31d324dca57",
      storageBucket: "fir-ionic-project-dc52e.appspot.com",
      apiKey: "AIzaSyDibzo0p2mUnQmjN6RlfXlHjbgkzSIUjFY",
      authDomain: "fir-ionic-project-dc52e.firebaseapp.com",
      messagingSenderId: "769063383314"
    })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()), provideFirebaseApp(() => initializeApp({"projectId":"fir-ionic-project-c3859","appId":"1:666798681810:web:ef5e5be2b6458ba776070b","storageBucket":"fir-ionic-project-c3859.appspot.com","apiKey":"AIzaSyAmfKvc7vgHdaLGvBulP_CDk3wxTQi5Ub4","authDomain":"fir-ionic-project-c3859.firebaseapp.com","messagingSenderId":"666798681810"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()),
  ],
});
