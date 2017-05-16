import DefineMap from 'can-define/map/';
import route from 'can-route';
import 'can-route-pushstate';

const AppViewModel = DefineMap.extend({
  message: {
    value: 'Hola papa!',
    serialize: false
  },
  title: {
    value: 'electron-donejs',
    serialize: false
  }
});

export default AppViewModel;
