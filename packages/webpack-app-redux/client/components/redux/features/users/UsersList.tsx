import { useAppSelector } from '@components/redux/app/store'
import {
  useGetUsersQuery,
  selectUserById,
  selectAllUsers,
  selectUsersResult,
} from './usersSlice'
import { useEffect, useState } from 'react'
export default function UsersList() {
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    fetch('/api/login', {
      method: 'POST',
      body: JSON.stringify({
        username: 555,
      }),
    })
  }, [])
  const a = useAppSelector((state) => selectUsersResult(state))
  //   const { data } = useGetUsersQuery()
  return (
    <div onClick={() => setCounter((c) => c + 1)}>
      {JSON.stringify(a.data)}
      <div>555</div>
      <div>{counter}</div>
    </div>
  )
}
