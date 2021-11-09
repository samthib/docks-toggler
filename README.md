# Docks toggler package for Atom
 
 ![](https://img.shields.io/badge/version-v1.0.0-orange)
 ![](https://img.shields.io/badge/license-MIT-green)
 ![](https://img.shields.io/badge/amp-v1.0.0-red)
 
Open and close your left, right and bottom docks in Atom only with shortcuts.

<!--
## License

**MIT :** ![](https://img.shields.io/github/license/samthib/docks-toggler)
**MIT :** ![](https://img.shields.io/badge/license-MIT-green) 

## Version

**Version :** ![](https://img.shields.io/github/package-json/v/samthib/docks-toggler)
**Version :** ![](https://img.shields.io/badge/version-1.0.0-orange) 
**Version APM :** ![](https://img.shields.io/badge/apm/l/docks-toggler) 

## Stats
![](https://img.shields.io/badge/github/stars/samthib/docks-toggler?style=social) 
![](https://img.shields.io/github/stars/samthib/docks-toggler) 
![](https://img.shields.io/github/issues/samthib/docks-toggler)
![](https://img.shields.io/github/forks/samthib/docks-toggler) 
-->

## Table of contents

- [Package description](#docks-toggler-package-for-atom)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
    - [From the Atom menu](#from-the-atom-menu)
    - [From the command line](#from-the-command-line)
- [Usage](#usage)
    - [Default shortcuts](#default-shortcuts)
    - [Customized shortcuts](#customized-shortcuts)
- [Author](#author)

## Installation

### From the Atom menu

Open **Settings** → **Install** and search for `docks-toggler`.

### From the command line

```
apm install docks-toggler
```

## Usage

### Default shortcuts

Dock on the **Left :** <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>⇦</kbd>

Dock on the **Right :** <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>⇨</kbd>

Dock on the **Bottom :** <kbd>CTRL</kbd> + <kbd>ALT</kbd> + <kbd>⇩</kbd>

![Screenshot](https://github.com/samthib/docks-toggler/blob/master/docks-toggler.gif)

### Customized shortcuts

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

* **Website :** [`samuel-thibault.fr`](http://samuel-thibault.fr)
* **Contact :** [`contact@samuel-thibault.fr`](mailto:contact@samuel-thibault.fr)
* **GitHub :** [`github.com/samthib`](https://github.com/samthib)
* **Linkedin :** [`github.com/samthib`](https://www.linkedin.com/in/samuel-thibault-1528481b1/)
