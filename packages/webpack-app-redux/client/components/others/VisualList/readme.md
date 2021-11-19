参考 https://juejin.cn/post/6995334008603148295
虚拟列表分为两个情况，一个是一次性获取全部数据，一个是快到达底部时获取另外数据。

下面讨论高度不固定的虚拟列表

常见的虚拟列表库需要指定每个 item 的高度，比如

- react-window https://react-window.vercel.app/#/api/VariableSizeList
- react-virtualized https://github.com/bvaughn/react-virtualized/blob/master/docs/List.md
  其中这两个是同一个作者，前者是升级版

动态高度的写法参考 issue
https://github.com/bvaughn/react-window/issues/582
