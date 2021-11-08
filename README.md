# Docks toggler package for atom
 
Open and close your left, right and bottom docks in atom only with shortcuts.

Installation
------------
Open **Settings** → **Install** and search for `docks-toggler`.

Alternatively, install through command-line:

```
apm install docks-toggler
```


## Commands

### Default shortcuts :

**Dock on the left :** <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>⇦</kbd>

**Dock on the right :** <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>⇨</kbd>

**Dock on the bottom :** <kbd>ctrl</kbd> + <kbd>alt</kbd> + <kbd>⇦</kbd>


![Screenshot](https://github.com/samthib/docks-toggler/blob/master/docks-toggler.gif)


### Customized shortcuts :

Customize with the shortcuts of your choice :

**Shortcuts file :** [`keymaps/docks-toggler.json`](./keymaps/docks-toggler.json)

```json
{
  "atom-workspace": {
    "ctrl-alt-right": "docks-toggler:right",
    "ctrl-alt-left": "docks-toggler:left",
    "ctrl-alt-down": "docks-toggler:bottom"
  }
}
```

## Author

**Website :** [`samuel-thibault.fr`](http://samuel-thibault.fr)
