import prepChoices from '../schema/prepChoices'
import create from '../element/create'
import Input from './Input'

export default class Select extends Input {
  createInput() {
    this.css.input = 'form-select'
    this.input_tagname = 'select'
    this.input_type = undefined
    super.createInput()
    this.choices = prepChoices(this)
    this.choices.forEach(c => {
      create('option', {
        parent: this._input,
        innerHTML: c.label,
        id: c.id,
        value: c.value,
      })
    })
    this.ATTRS.forEach(attr => {
      this._input[attr] = this[attr]
    })
  }
}
