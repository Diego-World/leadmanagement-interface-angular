import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lead } from '../models/lead';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LeadService {
  private leads: Lead[] = [];

  // READ
  getLeads(): Observable<Lead[]> {
    return this.http.get<Lead[]>('http://localhost:8080/lead');
  }

  // READ BY ID
  getLeadById(id: number): Observable<any>{
    const url = `http://localhost:8080/lead/${id}`;
    return this.http.get(url);
  }

  // CREATE
  addLead(newLead:Lead): Observable<any>{
    return this.http.post('http://localhost:8080/lead', newLead);
  }

  // UPDATE
  updateLead(updateLead: Lead): Observable<any> {
    const url = `http://localhost:8080/lead/${updateLead.id}`; // Assuming Lead has an 'id' property
    return this.http.put(url, updateLead);
  }

  // DELETE
  deleteLead(id: number): Observable<any> {
    const url = `http://localhost:8080/lead/${id}`;
    return this.http.delete(url);
  }

  constructor(private http: HttpClient) { }

}
