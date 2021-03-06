import {
  useObservableCallback,
  useObservableState,
  useObservable,
} from 'observable-hooks'
import styled from 'styled-components'
import { startWith, map, concatMap, combineLatestWith } from 'rxjs/operators'
import { from } from 'rxjs'
//https://gist.github.com/staltz/868e7e9bc2a7b8c1f754
const Container = styled.div`
  .header {
    background: #ececec;
    padding: 5px;
  }
  .suggestions {
    li {
      margin-bottom: 20px;
      img {
        height: 40px;
      }
      button {
        margin-left: 20px;
      }
    }
  }
`

interface Profile {
  html_url: string
  login: string
  avatar_url: string
}
export default function List() {
  //点击刷新
  const [onRefresh, refreshClickStream] = useObservableCallback((e) => e)
  const responseStream = useObservable(() =>
    refreshClickStream.pipe(
      startWith('startup click'),
      map(function () {
        const randomOffset = Math.floor(Math.random() * 500)
        return 'https://api.github.com/users?since=' + randomOffset
      }),
      concatMap(function (requestUrl) {
        return from(fetch(requestUrl).then((res) => res.json()))
      })
    )
  )
  const [onClose, suggestionStream] = useObservableCallback<any>((e) =>
    e.pipe(
      startWith('startup click'),
      combineLatestWith(responseStream),
      map(([index, arr]) => {
        const cur = arr.concat()
        if (typeof index === 'number') {
          cur.splice(index, 1, arr[Math.floor(Math.random() * arr.length)])
        }
        return cur
      })
    )
  )

  //   useSubscription(suggestionStream, console.log)
  const profileList = useObservableState<Profile[]>(suggestionStream)
  console.log(profileList)
  return (
    <Container>
      <div className="header">
        <h2>Who to follow</h2>
        <a href="#" className="refresh" onClick={onRefresh}>
          Refresh
        </a>
      </div>
      <ul className="suggestions">
        {profileList?.map((item, i) => {
          return (
            <li className="suggestion1" key={i}>
              <img src={item.avatar_url} />
              <div>
                <a
                  href={item.html_url}
                  target="_blank"
                  className="username"
                  rel="noreferrer"
                >
                  {item.login}
                </a>
                <button
                  className="close"
                  data-index={i}
                  onClick={() => onClose(i)}
                >
                  x
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
