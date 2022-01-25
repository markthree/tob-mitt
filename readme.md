# tob-mitt

在 `vue3` 中，[mitt](https://github.com/developit/mitt) 是一个推荐的 `eventBus` 库。这是一个 `uni_modules` 的完美迁移版本。

<br />
<br />

## 原仓库 📦
👉 [mitt](https://github.com/developit/mitt)

<br />
<br />

## Usage 🦖
```js
import mitt from "@/uni_modules/tob-mitt/index.js"

// 注册两个指定类型的事件函数
mitt.on('foo', () => console.log('我是foo1'))
mitt.on('foo', () => console.log('我是foo2'))

// 触发该类型的事件函数
mitt.emit('foo') // 将打印 我是foo1，我是foo2

// 注册一个带形参的事件函数
mitt.on('bar', (msg) => console.log(msg))

// 触发事件函数的同时设置实参
mitt.emit('bar', '你好') // 将打印 你好

mitt.off('bar') // 卸载所有 bar 事件函数

const bar = () => console.log('我好')
mitt.on('bar', bar)
mitt.off('bar', bar) // 单独卸载该事件函数

mitt.emit('bar') // 因为被卸载了，所以什么都不会触发

// 注册所有类型的事件函数
mitt.on('*', () => {
    console.log("不论什么时候都会触发")
})

mitt.emit('*') // 打印 不论什么时候都会触发

mitt.emit('foo') // 打印 我是foo1，我是foo2 不论什么时候都会触发

mitt.all // 保存事件函数的 map
```

<br />
<br />


## 组织 🦔

欢迎关注 **帝莎编程**
- [官网](http://dishaxy.dishait.cn/)
- [Gitee](https://gitee.com/dishait)

- [Github](https://github.com/dishait)

- [网易云课堂](https://study.163.com/provider/480000001892585/index.htm?share=2&shareId=480000001892585)

<br />
<br />

## License

Made with markthree

Published under [MIT License](./LICENSE).