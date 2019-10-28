import { ajax } from 'rxjs/ajax';
import { take } from 'rxjs/operators';

import { Context } from './models/context.interface';

export const load = <T>(context: Context<T>) => {
    ajax('http://mocky.io/v2/5d46156f3200000e00ae8be0').pipe(take(1))
        .subscribe((data) => {
            context.data.next({ ...data.response, runnig: true });
        }, () => {
            context.data.next(undefined);
        });
};
