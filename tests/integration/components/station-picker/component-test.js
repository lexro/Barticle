import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('station-picker', 'Integration | Component | station picker', {
  integration: true
});

test('it renders', function(assert) {
  this.render(hbs`{{station-picker}}`);

  assert.equal(this.$().text().trim(), '');
});
