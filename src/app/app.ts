import { ReplaySubject } from "rxjs";

import { Status } from "./models/status.interface";

export class App {
    private running: boolean;
    private status: ReplaySubject<Status>;

    constructor() {
        this.running = true;
        this.status = new ReplaySubject(1);
    }

    public load() {
        this.running = true;
        this.status.next(new Status([], true));

        return this.status.subscribe((status) => {
            return { running: this.running, status };
        });
    }
}
