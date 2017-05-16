import F from 'funcunit';
import QUnit from 'steal-qunit';

import 'electron-donejs/models/test';

F.attach(QUnit);

QUnit.module('electron-donejs functional smoke test', {
  beforeEach() {
    F.open('./development.html');
  }
});

QUnit.test('electron-donejs main page shows up', function() {
  F('title').text('electron-donejs', 'Title is set');
});
