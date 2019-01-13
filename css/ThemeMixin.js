import _ from 'lodash'
import create from '../element/create'
import config from './config'
import Mixin from './Mixin'

export default {
  init: function(opts) {
    this.mixin(Mixin)
    this.theme = this.css[opts.ur_modal ? 'modal' : 'default']

    if (opts.ur_modal) {
      if (opts.cancel) {
        this.on('unmount', opts.cancel)
      }
      create('div', {
        onclick: () => {
          this.unmount()
        },
        className: this.theme.mask,
        parent: this.root,
      })
    }

    this.theme.root &&
      this.theme.root.split(' ').forEach(c => this.root.classList.add(c))
  },
}
