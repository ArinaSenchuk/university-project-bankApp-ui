import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InterestProgram} from '../../models/InterestProgram';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private http: HttpClient) {}

  interestProgram: InterestProgram = new InterestProgram();


  ngOnInit() {
    this.http.get<InterestProgram>('http://localhost:8080/interest-program').subscribe(success => {
      this.interestProgram = success;
    });
  }

}
