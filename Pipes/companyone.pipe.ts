import {Pipe, PipeTransform} from '@angular/core';
import {Company} from './company';
@Pipe({
    name: 'companyone',
    pure:true
})
export class CompanyOnePipe implements PipeTransform {
  transform(obj: Company): string {
    let output = obj.cname+' : '+ obj.location;
    return output;
  }
} 