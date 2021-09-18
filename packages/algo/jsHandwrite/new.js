function CNew(ctr,...args) {
    const obj = {};//1
    Object.setPrototypeOf(obj, ctr.prototype);//2
    const result = ctr.apply(obj, args);//3
    return typeof result === "object" ? result : obj;//4
  }
  
function FF(name){
this.name=name
}
console.log(CNew(FF,'小红').name)