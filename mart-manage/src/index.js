import dva from 'dva';
import router from '@/router';
import { createBrowserHistory } from 'history';
import { createStore } from '@/store';

const app = dva({
  history: createBrowserHistory(),
  initialState: {}
})
createStore(app);
app.router(router);
app.start('#root')