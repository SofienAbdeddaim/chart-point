import { Component } from '@angular/core';
import {RelativeMass, Service} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  relativeMasses: RelativeMass[];

  constructor(service: Service) {
    this.relativeMasses = service.getRelativeMasses();
  }

  customizePoint = (arg: any) => {
    var color, hoverStyle;
    switch (arg.tag) {
      case "Star":
        color = "red";
        hoverStyle = { border: { color: "red" } };
        break;
      case "Satellite":
        color = "gray";
        hoverStyle = { border: { color: "gray" } };
    }
    return { color: color, hoverStyle: hoverStyle };
  }
}
