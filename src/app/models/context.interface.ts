import { Subject } from 'rxjs/internal/Subject';

export interface Context<T> {
    data: Subject<T>;
}
