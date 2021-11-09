'use babel';

// import DocksTogglerView from './docks-toggler-view';
import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    // Register the commands
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'docks-toggler:left': () => this.left(),
      'docks-toggler:right': () => this.right(),
      'docks-toggler:bottom': () => this.bottom()
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  serialize() {
    return {
      toggleDocksViewState: this.toggleDocksView.serialize()
    };
  },

  // Right Dock
  right() {
    this.toggle(atom.workspace.getRightDock())
  },
  // Left Dock
  left() {
    this.toggle(atom.workspace.getLeftDock())
  },
  // Bottom Dock
  bottom() {
    this.toggle(atom.workspace.getBottomDock())
  },

  /**
  * Toggle the dock
  * @param  {function} dock The dock to toggle
  * @return {void}          Empty
  */
  toggle(dock) {
    if (dock.isVisible()) {
      dock.hide();
    } else {
      dock.show();
    }
  }

};
