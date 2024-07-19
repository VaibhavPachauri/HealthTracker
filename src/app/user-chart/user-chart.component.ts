import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-chart',
  templateUrl: './user-chart.component.html',
  styleUrls: ['./user-chart.component.css']
})
export class UserChartComponent implements OnInit {
  users: User[] = [];
  chartData: any[] = [];

  view: any[] = [700, 400];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Username';
  showYAxisLabel = true;
  yAxisLabel = 'Workout Minutes';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  constructor(private userDataService: UserDataService) { }

  ngOnInit(): void {
    this.users = this.userDataService.getUsers();
    this.prepareChartData();
  }

  prepareChartData(): void {
    this.chartData = this.users.map(user => ({
      name: user.username,
      value: user.workoutMinutes
    }));
  }

  updateChartData(): void {
    this.users = this.userDataService.getUsers();
    this.prepareChartData();
  }
}
