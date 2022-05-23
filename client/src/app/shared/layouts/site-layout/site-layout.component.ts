import { OnInit, AfterViewInit, Component, ElementRef, ViewChild, Injectable, Input} from '@angular/core'
import {Router, ActivatedRoute, Params} from '@angular/router'
import {MaterialService} from '../../classes/material.service'
import {Subscription} from 'rxjs'
import { User, Filter } from '../../interfaces'
import {Observable} from 'rxjs/index'
import { switchMap } from 'rxjs/operators';
import { PositionsService } from '../../services/positions.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {of} from 'rxjs'
import { AuthService } from '../../services/auth.service'
import { formatDate } from '@angular/common'
import { first } from 'rxjs/operators'



@Component({
  selector: 'app-site-layout',
  templateUrl: './site-layout.component.html',
  styleUrls: ['./site-layout.component.css']
})
export class SiteLayoutComponent implements OnInit, AfterViewInit {

  @ViewChild('floating') floatingRef: ElementRef
  @ViewChild('sidenav') sidenavRef: ElementRef 
users: User[] =[]
 oSub: Subscription
//users$: Observable<User[]>
  
  //user: User
  filter: Filter = {}
  loading = false
  reloading = false
  noMoreUsers = false





  links = [
    {url: '/overview', name: 'Overview'},
    {url: '/analytics', name: 'Analytics'},
    {url: '/history', name: 'History'},
    {url: '/order', name: 'Add order'},
    {url: '/categories', name: 'Range'}
  ]

  constructor(private auth: AuthService, 
              private router: Router,
              private route: ActivatedRoute ) {
  }
  




  ngOnInit() {


  }
  
  
/*      this.auth.fetch().subscribe( users => {
        //   this.users = users 
      console.log('Users', users)
    } */


   /*  this.users$ = this.auth.fetch() */



  ngAfterViewInit() {
    MaterialService.initializeFloatingButton(this.floatingRef)
  MaterialService.initializeSidenav(this.sidenavRef)  
  }

  logout(event: Event) {
    event.preventDefault()
    this.auth.logout()
    this.router.navigate(['/login'])
  }

}
