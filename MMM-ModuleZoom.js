/* global Module */

/* Magic Mirror
 * Module: MMM-zoom
 *
 * Scale the entire UI with this plugin
 *
 * GNU GPL v3.0
 */

Module.register("MMM-ModuleZoom", {

	defaults : {
		zoom: 1
,		mode: 'global', //global || positional
		top_bar: {zoom: 1},
		top_left: {zoom: 1},
		top_center: {zoom: 1},
		top_right: {zoom: 1},
		upper_third: {zoom: 1},
		middle_center: {zoom: 1},
		lower_third: {zoom: 1},
		bottom_left: {zoom: 1},
		bottom_center: {zoom: 1},
		bottom_right: {zoom: 1},
		bottom_bar: {zoom: 1},
	},

	notificationReceived: function(notification, payload, sender) {
		if (notification === 'DOM_OBJECTS_CREATED') {
			if (this.config.mode === 'global') {
				document.getElementsByTagName('body')[0].style.zoom = this.config.zoom;
			} else {
				var positions = [
					{key: 'top_bar', selector: '.region.top.bar .container .module-content'},
					{key: 'bottom_bar', selector: '.region.bottom.bar .container .module-content'},
					{key: 'top_left', selector: '.region.top.left .container .module-content'},
					{key: 'bottom_left', selector: '.region.bottom.left .container .module-content'},
					{key: 'top_center', selector: '.region.top.center .container .module-content'},
					{key: 'bottom_center', selector: '.region.bottom.center .container .module-content'},
					{key: 'top_right', selector: '.region.top.right .container .module-content'},
					{key: 'bottom_right', selector: '.region.bottom.right .container .module-content'},
					{key: 'upper_third', selector: '.region.upper.third .container .module-content'},
					{key: 'middle_center', selector: '.region.middle.center .container .module-content'},
					{key: 'lower_third', selector: '.region.lower.third .container .module-content'}
				];
				MM.getModules().exceptModule(this).map(module => {
					if(module.data.position) {
						let position = positions.filter(position => position.key === module.data.position)[0];
						console.log(position);
						if(position !== -1) {
							document.querySelector(position.selector).style.zoom = this.config[position.key].zoom;
						}
					}
				});
			}
		}
	},
});
