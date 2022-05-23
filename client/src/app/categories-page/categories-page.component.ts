import {Component, OnInit} from '@angular/core'
import {CategoriesService} from '../shared/services/categories.service'
import {Category} from '../shared/interfaces'
import {Observable} from 'rxjs/index'
import {ActivatedRoute, Params, Router} from '@angular/router'

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {

  id: string
  name: string

  categories$: Observable<Category[]>

  constructor(private categoriesService: CategoriesService,
    private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.categories$ = this.categoriesService.fetch()

    this.id = this.route.snapshot.params['id']
    this.name = this.route.snapshot.params['name']
  }

}
