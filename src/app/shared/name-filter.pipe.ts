// name-filter.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'nameFilter'
})
export class NameFilterPipe implements PipeTransform {
    transform(objects: any[], searchText: string): any[] {
        if (!objects) {
            return [];
        }

        if (!searchText || searchText.trim().length < 2) {
            return objects;
        }

        searchText = searchText.toLowerCase();
        return objects.filter(object => object.name.toLowerCase().includes(searchText));
    }
}
