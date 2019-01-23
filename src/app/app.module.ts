// Angular components
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

// Graphical components
import { HomeViewComponent } from "./components/home-view/home-view.component";
import { AboutViewComponent } from "./components/about-view/about-view.component";

// Service components
import { AppComponent } from "./app.component";
import TrippyApiService from "./shared/core/TrippyApi.service";
import TrippyApiBaseService from "./shared/core/TrippyApiBase.service";

@NgModule({
  declarations: [AppComponent, HomeViewComponent, AboutViewComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        pathMatch: "full",
        component: HomeViewComponent
      },
      {
        path: "about",
        component: AboutViewComponent
      }
    ])
  ],
  providers: [{ provide: TrippyApiBaseService, useClass: TrippyApiService }],
  bootstrap: [AppComponent]
})
export class AppModule {}
