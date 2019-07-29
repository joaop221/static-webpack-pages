export class Status {
    disabled: number[];
    runnig: boolean;
    active: boolean;

    constructor() {
        this.disabled = [];
        this.runnig = false;
        this.active = false;
    }
}
