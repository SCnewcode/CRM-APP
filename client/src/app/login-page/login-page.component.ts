import {Component, OnDestroy, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from '../shared/services/auth.service'
import {Subscription} from 'rxjs'
import {ActivatedRoute, Params, Router} from '@angular/router'
import {MaterialService} from '../shared/classes/material.service'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit, OnDestroy {

  form: FormGroup
  aSub: Subscription

  constructor(private auth: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private title: Title,
              private meta: Meta ) {
                 title.setTitle('CRM dashboard')
                 meta.addTags ([
                   { name: 'keywords', content: 'login, registration, system' },
                   { name: 'description', content: 'login page' },
                 ])
             
  }



  

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(6)])
    })

    this.route.queryParams.subscribe((params: Params) => {
      if (params['registered']) {
        MaterialService.toast('You can login now')
      } else if (params['accessDenied']) {
        MaterialService.toast('Log in to the system')
      } else if (params['sessionFailed']) {
        MaterialService.toast('Please log in again')
      }
    })
  }

  ngOnDestroy() {
    if (this.aSub) {
      this.aSub.unsubscribe()
    }
  }

  onSubmit() {
    this.form.disable()

    this.aSub = this.auth.login(this.form.value).subscribe(
      () => this.router.navigate(['/overview']),
      error => {
        MaterialService.toast(error.error.message)
        this.form.enable()
      }
    )
  }

}
