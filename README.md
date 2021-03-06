# Docks toggler package for Atom

![](https://img.shields.io/github/license/samthib/docks-toggler)
![](https://img.shields.io/github/package-json/v/samthib/docks-toggler)
![](https://img.shields.io/apm/v/docks-toggler)
![](https://img.shields.io/github/stars/samthib/docks-toggler)
![](https://img.shields.io/github/issues/samthib/docks-toggler)
![](https://img.shields.io/github/forks/samthib/docks-toggler)
![](https://img.shields.io/github/stars/samthib/docks-toggler?style=social)

Open and close your left, right and bottom docks in Atom only with shortcuts.

## Table of contents

- [Package description](#docks-toggler-package-for-atom)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
    - [From the Atom menu](#from-the-atom-menu)    
    - [From the Atom website](#from-the-atom-website)
    - [From the command line](#from-the-command-line)
- [Usage](#usage)
    - [Default shortcuts](#default-shortcuts)
    - [Customized shortcuts](#customized-shortcuts)
- [Author](#author)

## Installation

### From the Atom website

Go to [`docks-toggler`](https://atom.io/packages/docks-toggler)

Click **Install**
 
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
* **Linkedin :** [`linkedin.com/in/samuel-thibault-1528481b1/`](https://www.linkedin.com/in/samuel-thibault-1528481b1/)
