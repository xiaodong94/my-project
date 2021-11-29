class Cache {
  constructor() {
    this.cache = new Map()
  }

  has(key) {
    return this.cache.has(key)
  }

  get(key) {
    console.log('this.cache',this.cache)
    return this.cache.get(key)
  }

  set(key, value) {
    return this.cache.set(key, value)
  }
}

module.exports = Cache
