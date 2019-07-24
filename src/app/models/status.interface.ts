export class Status {
    public disabled: number[];
    public active: boolean;

    constructor(disabled: number[], active: boolean) {
        this.disabled = disabled;
        this.active = active;
    }
}
