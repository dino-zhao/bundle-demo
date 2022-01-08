import { Observable, of, from } from 'rxjs'
import { map, filter, mergeMap, delay } from 'rxjs/operators'
export const disposingObservable = () => {
  const observable = new Observable(function subscribe(subscriber) {
    // Keep track of the interval resource
    const intervalId = setInterval(() => {
      subscriber.next('hi')
    }, 1000)

    // Provide a way of canceling and disposing the interval resource
    return function unsubscribe() {
      clearInterval(intervalId)
    }
  })
  const subscription = observable.subscribe((x) => console.log(x))

  setTimeout(() => {
    subscription.unsubscribe()
  }, 5000)
}

export const pipeFun = () => {
  of(1, 2, 3)
    .pipe(
      map((x) => x * x),
      filter((x) => x > 2)
    )
    .subscribe((v) => console.log(`value: ${v}`))
}

export function tike() {
  from([1, 2, 3, 4]).pipe(
    mergeMap((val) => {
      console.log(val)
      return from([val]).pipe(delay(1000 * val))
    })
  )
}
