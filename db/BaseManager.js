export default class BaseManager {
  constructor(model) {
    this.model = model
    this.refresh()
    this.id = 0
  }

  create = data => {
    data.id = ++this.id
    return this.set(data)
  }

  save = obj => this.create(obj.serialize())

  set = data => {
    const obj = new this.model(data)
    this.items.set(obj.id, obj)
    this[obj.id] = obj
    return obj
  }

  all() {
    return [...this.items.values()]
  }

  filter(opts) {
    let results = this.all()
    if (typeof opts === 'function') {
      return results.filter(opts)
    }
    Object.entries(opts).forEach(([key,value]) => {
      results = results.filter(r => r[key] === value)
    })
    return results
  }

  refresh() {
    this.items = new Map()
  }

  get(id) {
    return this.items.get(parseInt(id))
  }
}
