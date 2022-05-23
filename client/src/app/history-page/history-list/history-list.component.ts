import {AfterViewInit, Component, ElementRef, Input, OnDestroy, ViewChild, OnInit} from '@angular/core'
import {Order, Category} from '../../shared/interfaces'
import {MaterialInstance, MaterialService} from '../../shared/classes/material.service'
import { Pipe, PipeTransform } from '@angular/core'

@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css']
})



export class HistoryListComponent implements OnDestroy, AfterViewInit {

  
  @Input() orders: Order[]
  @ViewChild('modal') modalRef: ElementRef
  @ViewChild('dropdown') dropdownRef: ElementRef
  searchValue = '';
  searchPlaceholder = 'Date';
  searchField = 'date';
 
  

  selectedCategory: Category
  selectedOrder: Order
  modal: MaterialInstance
 

  ngOnDestroy() {
    this.modal.destroy()
  }



  ngAfterViewInit() {
    this.modal = MaterialService.initModal(this.modalRef)

  }


  computePrice(order: Order): number {
    return order.list.reduce((total, item) => {
      return total += item.quantity * item.cost
    }, 0)
  }

  selectOrder(order: Order) {
    this.selectedOrder = order
    this.modal.open()
  }

  closeModal() {
    this.modal.close()
  }

  changeCriteria(field: string) {
      const namesMap = {
        date: 'Date'
      };
  this.searchPlaceholder = namesMap[field];
     this.searchField = field;

  }




}
