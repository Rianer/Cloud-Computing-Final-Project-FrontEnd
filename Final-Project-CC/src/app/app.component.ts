import { Component, OnInit } from '@angular/core';
import { Drone } from './models/drones.model';
import { DroneService } from './services/drones/drone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Final-Project-CC';
  droneList: Drone[];
  constructor(private droneService: DroneService) {}
  ngOnInit(): void {
    this.refreshDashData();
  }

  updateDroneStatus(): void {
    this.droneService.getDrones().subscribe((res) => {
      this.droneList = res;
    });
  }

  refreshDashData(): void {
    this.updateDroneStatus();
  }
}
