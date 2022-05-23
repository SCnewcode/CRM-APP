import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wfmFilter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any, value: string, field: string): any {
    if (items.length === 0 || !value) {
      return items;
    }

    return items.filter((i) => {
      //const t = Object.assign({}, i);
    if (!isNaN(i[field])) {
        i[field] += '';
      }  

      return  i[field].toLowerCase().indexOf(value.toLowerCase()) !== -1; 
    });
  } 

/*   transform(orderList, searchStr: string, order: string) {
    if (orderList.length === 0 || searchStr === '') {
      return orderList;
    }

    return orderList.filter(order => order.order.toLowerCase().indexOf(searchStr.toLowerCase()) !== -1);
  } */
}




 




