import './polyfills.ts';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

// 不把编译器发布到浏览器
// import { platformBrowser } from '@angular/platform-browser';

// 静态编译器会生成一个AppModule的工厂AppModuleNgFactory
// import { AppModuleNgFactory } from './app.module.ngfactory';

// 引导AppModuleNgFactory
// platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
