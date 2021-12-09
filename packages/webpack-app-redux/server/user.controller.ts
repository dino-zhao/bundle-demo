export interface User {
  id: number
  name: string
}

class Store {
  private data: User[] = [
    {
      id: 1,
      name: 'li',
    },
    {
      id: 2,
      name: 'wang',
    },
  ]
  post(v: User) {
    this.data.push(v)
    return this.data
  }
  get(id: number) {
    return this.data.find((item) => item.id == id)
  }
  update(state: User) {
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
  getState(): User[] {
    return this.data
  }
}
module.exports = new Store()
