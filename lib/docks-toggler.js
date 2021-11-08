'use babel';

// import DocksTogglerView from './docks-toggler-view';
import { CompositeDisposable } from 'atom';

export default {

  subscriptions: null,

  activate(state) {
    this.subscriptions = new CompositeDisposable();

    // Register the commands to be used
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
    if (atom.workspace.getRightDock().isVisible()) {
      atom.workspace.getRightDock().hide();
    } else {
      atom.workspace.getRightDock().show();

    }
  },
  // Left Dock
  left() {
    if (atom.workspace.getLeftDock().isVisible()) {
      atom.workspace.getLeftDock().hide();
    } else {
      atom.workspace.getLeftDock().show();
    }
  },
  // Bottom Dock
  bottom() {
    if (atom.workspace.getBottomDock().isVisible()) {
      atom.workspace.getBottomDock().hide();
    } else {
      atom.workspace.getBottomDock().show();
    }
  }

};
