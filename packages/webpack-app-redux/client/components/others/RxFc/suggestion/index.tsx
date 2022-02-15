import {
  useObservableCallback,
  useSubscription,
  useObservableState,
} from 'observable-hooks'
import styled from 'styled-components'
import { startWith, map, concatMap } from 'rxjs/operators'
import { from } from 'rxjs'
import { useImmer } from 'use-immer'

const Container = styled.div`
  h2 {
    font-weight: bold;
    display: inline-block;
  }
  .refresh {
    font-size: 80%;
    margin-left: 10px;
  }
  .header {
    background: #ececec;
    padding: 5px;
  }
  .suggestions {
    border: 2px solid #ececec;
  }
  li {
    padding: 5px;
  }
  li img {
    width: 40px;
    height: 40px;
    border-radius: 20px;
  }
  li .username,
  li .close {
    display: inline-block;
    position: relative;
    bottom: 15px;
    left: 5px;
  }
`

interface Profile {
  html_url: string
  login: string
  avatar_url: string
}
export default function List() {
  //   const [onRefresh, refreshClickStream] = useObservableCallback((e) => e)
  //   //   useSubscription(refreshClickStream, console.log)

  //   const [profileList, setProfile] = useImmer<Profile[]>([])

  //   const responseStream = refreshClickStream.pipe(
  //     startWith('startup click'),
  //     map(function () {
  //       const randomOffset = Math.floor(Math.random() * 500)
  //       return 'https://api.github.com/users?since=' + randomOffset
  //     }),
  //     concatMap(function (requestUrl) {
  //       return from(fetch(requestUrl).then((res) => res.json()))
  //     })
  //   )

  const [profileList, onRefresh] = useObservableState<Profile[], any>(
    (input$) =>
      input$.pipe(
        startWith('startup click'),
        map(function () {
          const randomOffset = Math.floor(Math.random() * 500)
          return 'https://api.github.com/users?since=' + randomOffset
        }),
        concatMap(function (requestUrl) {
          return from(
            fetch(requestUrl)
              .then((res) => res.json())
              .then((res) => res.slice(0, 3))
          )
        })
      ),
    []
  )

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
        {profileList.map((item) => {
          return (
            <li className="suggestion1" key={item.login}>
              <img src={item.avatar_url} />
              <a
                href={item.html_url}
                target="_blank"
                className="username"
                rel="noreferrer"
              >
                {item.login}
              </a>
              <a href="#" className="close close1">
                x
              </a>
            </li>
          )
        })}
      </ul>
    </Container>
  )
}
