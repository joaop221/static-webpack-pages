
import { Subject } from 'rxjs/internal/Subject';

import { Context } from './models/context.interface';

export const app = () => ({
    createContext: <T>() => ({ data: new Subject<T>()} as Context<T>),
});
