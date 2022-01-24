export default function mitt(all) {
	all = all || new Map()
	return {
		/**
		 * 一个保存了注册函数的 map.
		 */
		all,
		/**
		 * 注册一个指定类型的事件函数
		 * @param {string|symbol} type 事件类型, 可以用 `'*'` 来为所有的事件类型注册事件函数
		 * @param {Function} handler 事件函数
		 * @memberOf mitt
		 */
		on(type, handler) {
			const handlers = all.get(type)
			if (handlers) {
				handlers.push(handler)
			} else {
				all.set(type, [handler])
			}
		},

		/**
		 * 移除一个指定类型的事件函数
		 * 如果第二参数 handler 被忽略，将移除所有函数
		 * @param {string|symbol} type 事件类型, 可以用 `'*'` 来移除所有类型的所有事件函数
		 * @param {Function} [handler] 将移除的事件函数
		 * @memberOf mitt
		 */
		off(type, handler) {
			const handlers = all.get(type)
			if (handlers) {
				if (handler) {
					handlers.splice(
						handlers.indexOf(handler) >>> 0,
						1
					)
				} else {
					all.set(type, [])
				}
			}
		},

		/**
		 * 触发指定类型的所有事件函数
		 * 类型为 `*` 的所有事件函数也会在最后调用
		 *
		 * @param {string|symbol} type 希望触发的类型
		 * @param {Any} [evt] 传递给每个即将触发的事件函数的参数
		 * @memberOf mitt
		 */
		emit(type, evt) {
			let handlers = all.get(type)
			if (handlers) {
				handlers.slice().map(handler => {
					handler(evt)
				})
			}

			handlers = all.get('*')
			if (handlers) {
				handlers.slice().map(handler => {
					handler(type, evt)
				})
			}
		}
	}
}
