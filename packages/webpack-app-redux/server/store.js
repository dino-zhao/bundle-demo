class Store {
  data = [
    {
      id: 'a',
    },
    {
      id: 'b',
    },
  ]
  post(v) {
    this.data.push(v)
    return this.data
  }
  delete(id) {
    const index = this.data.findIndex((i) => i.id === id)
    if (index > -1) {
      this.data.splice(index, 1)
      return true
    }
    return false
  }
}
module.exports = new Store()
