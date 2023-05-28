import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Drone } from 'src/app/models/drones.model';

@Injectable({
  providedIn: 'root',
})
export class DroneService {
  private URL = 'https://inlaid-marker-382208.ew.r.appspot.com/drones';
  constructor(private http: HttpClient) {}

  getDrones(): Observable<Drone[]> {
    return this.http.get<Drone[]>(this.URL);
  }
}
