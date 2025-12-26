/* global Module */

/* MagicMirror²
 * Module: MMM-ModuleZoom
 *
 * By Stefan Nachtrab
 * MIT Licensed.
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
        const positions = [
          {key: 'top_bar', selector: '.region.top.bar'},
          {key: 'bottom_bar', selector: '.region.bottom.bar'},
          {key: 'top_left', selector: '.region.top.left'},
          {key: 'bottom_left', selector: '.region.bottom.left'},
          {key: 'top_center', selector: '.region.top.center'},
          {key: 'bottom_center', selector: '.region.bottom.center'},
          {key: 'top_right', selector: '.region.top.right'},
          {key: 'bottom_right', selector: '.region.bottom.right'},
          {key: 'upper_third', selector: '.region.upper.third'},
          {key: 'middle_center', selector: '.region.middle.center'},
          {key: 'lower_third', selector: '.region.lower.third'}
        ];

        positions.forEach(pos => {
          const configValue = this.config[pos.key] ? this.config[pos.key].zoom : null;

          if (configValue && configValue !== 1) {
            const elements = document.querySelectorAll(`${pos.selector} .module-content`);

            elements.forEach(el => {
              el.style.zoom = configValue;
              el.style.setProperty("zoom", configValue, "important");
            });
          }
        });
			}
		}
	},
});
