interface Post {
  id: string
}

class Store {
  private data: Post[] = [
    {
      id: 'a',
    },
    {
      id: 'ccc',
    },
  ]
  post(v: Post) {
    this.data.push(v)
    return this.data
  }
  delete(id: string) {
    const index = this.data.findIndex((i) => i.id === id)
    if (index > -1) {
      this.data.splice(index, 1)
      return true
    }
    return false
  }
  getState(): Post[] {
    return this.data
  }
}
module.exports = new Store()
