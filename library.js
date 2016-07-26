(function () {
	'use strict';

	/* ---------------------------------------------
	 * require dependencies
	 * ---------------------------------------------*/
	let Promise = require('bluebird'),
		nbbHelpers = require.main.require('./src/controllers/helpers'),
		data = {
			title: 'Groups Managment',
			breadcrumbs: nbbHelpers.buildBreadcrumbs([{}]),
			chat: {}
		};

	/* ---------------------------------------------
	 * declare routes
	 * ---------------------------------------------*/
	let render = {
		page: function (req, res, next) {
			res.render('groups-managment', data);
		}
	};

	let Plugin = {
		init: function (params, callback) {
			/* ---------------------------------------------
			 * setup routes
			 * ---------------------------------------------*/
			params.router.get('/groups', params.middleware.buildHeader, render.page);
			params.router.get('/api/groups', render.page);
			callback(null);
		}
	};

	module.exports = Plugin;
})();
