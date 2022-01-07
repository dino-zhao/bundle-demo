import { useEffect } from 'react'
import { Observable } from 'rxjs'

export default function RxFc() {
  useEffect(() => {
    const observable = new Observable((subscriber) => {
      subscriber.next(1)
      subscriber.next(2)
      subscriber.next(3)
      setTimeout(() => {
        subscriber.next(5)
        subscriber.complete()
      }, 1000)
    })

    console.log('just before subscribe')
    observable.subscribe({
      next(x) {
        console.log('got value ' + x)
      },
      error(err) {
        console.error('something wrong occurred: ' + err)
      },
      complete() {
        console.log('done')
      },
    })
    console.log('just after subscribe')
  }, [])

  return <div>rxjs</div>
}
