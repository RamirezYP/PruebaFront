import { Component, OnInit } from '@angular/core';
import { faAngleRight, faBell, faCheck, faCircleCheck, faClock, faClockFour, faClockRotateLeft, faCoffee,faDollarSign,faEnvelope,faEnvelopesBulk,faEnvelopeSquare,faFaceSmileBeam,faMoneyCheckDollar,faPager,faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faUser = faUser;
  faBell = faBell;
  faMoney= faMoneyCheckDollar;
  faDollar = faDollarSign;
  faFace= faFaceSmileBeam;
  faClock= faClock;
  faMoneyCheck= faMoneyCheckDollar;
  faCloclLeft=faClockRotateLeft;
  faAngleRight=faAngleRight;
  faCircleCheck=faCircleCheck;
  faEnvelope= faEnvelope;
  faCheck=faCheck;


}
