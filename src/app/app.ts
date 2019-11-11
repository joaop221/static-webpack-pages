import { Context } from './models/context.interface';

export const app = () => ({
    createContext: <T>() => ({} as Context<T>),
});
