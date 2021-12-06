'use babel';

// import DocksTogglerView from './docks-toggler-view';
import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    // Register the commands
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'docks-toggler:left': () => this.toggle(atom.workspace.getLeftDock()),
      'docks-toggler:right': () => this.toggle(atom.workspace.getRightDock()),
      'docks-toggler:bottom': () => this.toggle(atom.workspace.getBottomDock())
    }));
  },

  deactivate() {
    this.subscriptions.dispose();
  },

  // serialize() {
  //   return {
  //     toggleDocksViewState: this.toggleDocksView.serialize()
  //   }
  // },

  serialize() {
    return this.subscriptions.serialize();
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
