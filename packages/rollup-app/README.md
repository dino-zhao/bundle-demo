1. 专注于生产打包，不支持 hmr，推荐了[nollup](https://github.com/PepsRyuu/nollup)
   2.rollup 的 treeshaking 不需要标注是否有副作用,只要能运行到就不会被丢弃,相对于 webpack,import ''的情况,后者可以手动去掉,前者不可以.
