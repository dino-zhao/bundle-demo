export interface Post {
  id: number
  name: string
}

class Store {
  private data: Post[] = [
    {
      id: 1,
      name: 'A sample post',
    },
    {
      id: 2,
      name: 'A post about rtk query',
    },
  ]
  post(v: Post) {
    this.data.push(v)
    return this.data
  }
  get(id: number) {
    return this.data.find((item) => item.id == id)
  }
  update(state: Post) {
    const index = this.data.findIndex((i) => i.id === state.id)
    if (index > -1) {
      this.data.splice(index, 1, state)
      return this.data
    }
    return this.post(state)
  }
  delete(id: number) {
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
