const Stack = function() {
	let head = null
	let n = 0

	const Node = function(item,next) {
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
		push(...items) {
			items.map(item => {
				let previous = head
				head = new Node(item, previous)
				n++
			})
		},
		pop() {
			if (this.isEmpty) throw RangeError("No more Items")
			let item = head.item
			head = head.next
			n--
			return item
		},
		peek() {
			if (this.isEmpty) throw RangeError("Stack has no Items")
			return head.item
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

module.exports = Stack
