import { app } from './app/app';
import { load } from './app/load';
import { Status } from './app/models/status.interface';

import './main.scss';

const localApp = app();
const context = localApp.createContext<{status: Status}>();

load(context);

context.data.subscribe((status) => {
    // current actions
});
