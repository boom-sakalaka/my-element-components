/*
 * @Author: GZH
 * @Date: 2022-02-05 21:49:15
 * @LastEditors: GZH
 * @LastEditTime: 2022-02-07 15:19:55
 * @FilePath: \my-element-components\src\components\index.ts
 * @Description:
 */
import { App } from 'vue';
import chooseArea from './chooseArea';
import chooseIcon from './chooseIcon';
import trend from './trend';
import notification from './notification';
import list from './list';
import menu from './menu';
import chooseTime from './chooseTime';
// import chooseDate from './chooseDate'
import progress from './progress';
// import chooseCity from './chooseCity'
// import form from './form'
// import modalForm from './modalForm'
// import table from './table'
// import calendar from './calendar'

const components = [
  chooseArea,
  chooseIcon,
  trend,
  notification,
  list,
  menu,
  chooseTime,
  // chooseDate,
  // chooseCity,
  progress,
  // form,
  // modalForm,
  // table,
  // calendar
];

export default {
  install(app: App) {
    components.map(item => {
      app.use(item);
    });
  },
};
