# MMM-PositionZoom

This is a module for the [MagicMirror²](https://github.com/MichMich/MagicMirror/).

Unhappy with your overall module alignment? Scale the MagicMirror UI globally or by screen position.

## Installation
Go to your MagicMirror folder.
```bash
cd modules
git clone https://github.com/st3v0rr/MMM-ModuleZoom.git
```
This module has no npm dependencies.

## Update
```bash
cd ~/MagicMirror/modules/MMM-SolarEdge
git pull
```

## Using the module

To use this module, add the following configuration block to the modules array in the `config/config.js` file:

```js
var config = {
    modules: [
        {
            module: 'MMM-ModuleZoom',
            config: {
                mode: 'global',
                zoom: 0.9
            }
        },
    ]
}
```
or based on single module positions
```js
var config = {
    modules: [
        {
            module: 'MMM-ModuleZoom',
            config: {
                mode: 'positional',
                top_left: {zoom: 1.5},
                top_center: {zoom: 1.5},
                top_right: {zoom: 1.5},
                bottom_left: {zoom: 1.1},
                bottom_right: {zoom: 1.5},
            }
        },
    ]
}
```

## Configuration options

| Option                            | Description
|-----------------                  |-----------
| `mode`                            | *Optional* `'global'` or `'positional'`. Default is `global`.
| `zoom`                            | *Optional* Global zoom factor when `mode` is `global`. Default is `1`.
| `top_bar.zoom`                    | *Optional* Zoom for the `top_bar` region when `mode` is `positional`.
| `top_left.zoom`                   | *Optional* Zoom for the `top_left` region when `mode` is `positional`.
| `top_center.zoom`                 | *Optional* Zoom for the `top_center` region when `mode` is `positional`.
| `top_right.zoom`                  | *Optional* Zoom for the `top_right` region when `mode` is `positional`.
| `upper_third.zoom`                | *Optional* Zoom for the `upper_third` region when `mode` is `positional`.
| `middle_center.zoom`              | *Optional* Zoom for the `middle_center` region when `mode` is `positional`.
| `lower_third.zoom`                | *Optional* Zoom for the `lower_third` region when `mode` is `positional`.
| `bottom_left.zoom`                | *Optional* Zoom for the `bottom_left` region when `mode` is `positional`.
| `bottom_center.zoom`              | *Optional* Zoom for the `bottom_center` region when `mode` is `positional`.
| `bottom_right.zoom`               | *Optional* Zoom for the `bottom_right` region when `mode` is `positional`.
| `bottom_bar.zoom`                 | *Optional* Zoom for the `bottom_bar` region when `mode` is `positional`.
