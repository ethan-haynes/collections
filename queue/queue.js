const Queue = function() {
  let head = null
  let last = null
  let n = 0

  const Node = function(item, next) {
    this.item = item
    this.next = next
  }

  return  {
		get isEmpty() {
			return !head
		},
    size() {
      return n
    },
		peek() {
			if (this.isEmpty) throw RangeError("Queue has no Items")
			return head.item
		},
    enqueue(...items) {
      items.map(item => {
        let previous = last
        last = new Node(item)
        if (this.isEmpty) {head = last} else {previous.next = last}
        n++
      })
    },
    dequeue() {
      if (this.isEmpty) throw RangeError("Queue has no Items")
      let item = head.item
      head = head.next
      n--
      if (isEmpty) last = null
      return item
    },
		[Symbol.iterator]() {
   		return {
      	i: head,
      	next() {
        	if (!!this.i) {
						let previous = this.i
						this.i = previous.next
          	return { value: previous.item, done: false }
        	}
        		return { value: undefined, done: true }
      		}
    	}
    },
		map(callback) {
      let i = 0
      let items = [...this]
      let result = []
  		for (let item of this) {
        result.push(callback(item, i, items))
      }
      return result
		},
		toString() {
			return String([...this])
  	}
  }
}

module.exports = Queue
