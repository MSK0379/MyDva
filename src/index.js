import React from 'react';
import { message, LocaleProvider } from 'antd';
import ReactDOM from 'react-dom';
import dva from 'dva';
import createHistory from 'history/createBrowserHistory';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import './index.css';

// 1. Initialize
const app = dva({
  // history.listen 能获得pathname
  history: createHistory(),
  onError(error) {
    if (error && error.statusCode === 402) {
      return;
    }
    message.error(error.message);
  },
});

// 2. Plugins
// app.use({});

// 3. Model
app.model(require('./models/products').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
const App = app.start();
ReactDOM.render(
  // 国际化，中文
  (<LocaleProvider locale={zhCN}>
    <App />
  </LocaleProvider>),
  document.getElementById('root'))
  ;

