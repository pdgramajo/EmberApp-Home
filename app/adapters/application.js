import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	//host: 'http://localhost:58797',
	host: 'http://emberwebapi.gear.host',
	namespace: 'api'
});
