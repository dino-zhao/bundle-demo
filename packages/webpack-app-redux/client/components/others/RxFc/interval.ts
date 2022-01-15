import { interval } from 'rxjs'

const intervalInstance = interval(100).subscribe((val) => console.log(val))

setTimeout(() => intervalInstance.unsubscribe(), 5000)
