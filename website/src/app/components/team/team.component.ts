import { Component, OnInit } from '@angular/core';
import { TeamService } from '../../common/services/team.service';
import { Team } from '../../common/models/team.model';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss'],
})
export class TeamComponent implements OnInit {
  teamMembers: Team[];

  constructor(private dataService: TeamService) {}

  ngOnInit() {
    this.teamMembers = this.dataService.getData();
  }
}
