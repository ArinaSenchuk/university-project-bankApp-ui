import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InterestProgram} from '../../models/InterestProgram';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) {}

  interestProgram: InterestProgram[] = [];

  displayedColumns: string[] = ['name', 'term', 'interest'];


  ngOnInit() {
    this.http.get<InterestProgram[]>('http://localhost:8080/interest-program').subscribe(success => {
      this.interestProgram = success;
    });
  }
}
