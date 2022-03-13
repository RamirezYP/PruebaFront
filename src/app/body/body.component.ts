import { Component, OnInit } from '@angular/core';
import { faAngleRight, faBell, faCalendarDays, faCheck, faCircleCheck, faClock, faClockFour, faClockRotateLeft, faCoffee,faCreditCard,faDollarSign,faEnvelope,faEnvelopesBulk,faEnvelopeSquare,faFaceSmileBeam,faHashtag,faIdCard,faMoneyCheck,faMoneyCheckAlt,faMoneyCheckDollar,faPager,faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faUser = faUser;
  faBell = faBell;
  faMoney= faMoneyCheckDollar;
  faCredict=faCreditCard;
  faDollar = faDollarSign;
  faFace= faFaceSmileBeam;
  faCalendar = faCalendarDays;
  faCard=faIdCard;
  faHashtag=faHashtag

  faClock= faClock;
  faPage= faPager;
  faCloclLeft=faClockRotateLeft;
  faAngleRight=faAngleRight;
  faCircleCheck=faCircleCheck;
  faEnvelope= faEnvelope;
  faCheck=faCheck;
}
