import { ReplaySubject } from 'rxjs';

import { ajax } from 'rxjs/ajax';
import { take } from 'rxjs/operators';

import { Status } from './models/status.interface';

export class App {
    status: ReplaySubject<Status>;

    constructor() {
        this.status = new ReplaySubject(1);
    }

    load() {
        ajax('http://mocky.io/v2/5d46156f3200000e00ae8be0').pipe(take(1))
            .subscribe((data) => {
                this.status.next({ ...data.response, runnig: true });
            }, () => {
                this.status.next(new Status());
            });
    }
}
