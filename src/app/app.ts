import { ReplaySubject } from 'rxjs';

import http from 'http';

import { Status } from './models/status.interface';

export class App {
    status: ReplaySubject<Status>;

    constructor() {
        this.status = new ReplaySubject(1);
    }

    load() {
        this.status.next(new Status());
    }
}
