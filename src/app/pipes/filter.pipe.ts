import { Injectable, Pipe, PipeTransform } from "@angular/core";
import { filterMultiple } from '../mds-helper.component';

@Pipe({
  name: "fltMultiple",
  pure: false
})

@Injectable()
export class FilterMultiPipe implements PipeTransform {
  transform(items: any[], filterlist: any): any {
    console.log(items, filterlist)
    if(items && filterlist){
      return filterMultiple(items,'group', filterlist);
    }
    
  }
}
