# Docks toggler package for Atom
 
Open and close your left, right and bottom docks in Atom only with shortcuts.

## Table of contents

- [Project Title](#project-title)
- [Demo-Preview](#demo-preview)
- [Table of contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
    - [Default shortcuts](#default-shortcuts)
    - [Customized shortcuts](#customized-shortcuts)
- [License](#license)
- [Author](#author)

## Installation

Open **Settings** → **Install** and search for `docks-toggler`.

Alternatively, install through command-line:

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

## License

**MIT :** ![](https://img.shields.io/github/license/samthib/docks-toggler)

**MIT :** ![](https://img.shields.io/badge/license-MIT-green) 

## Author

* **Website :** [`samuel-thibault.fr`](http://samuel-thibault.fr)
* **Contact :** [`contact@samuel-thibault.fr`](mailto:contact@samuel-thibault.fr)
* **GitHub :** [`github.com/samthib`](https://github.com/samthib)
* **Linkedin :** [`github.com/samthib`](https://www.linkedin.com/in/samuel-thibault-1528481b1/)
