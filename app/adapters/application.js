import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://emberwebapi.gear.host',
	namespace: 'api'
});