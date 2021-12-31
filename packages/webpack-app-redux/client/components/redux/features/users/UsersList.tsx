import { useAppSelector } from '@components/redux/app/store'
import {
  useGetUsersQuery,
  selectUserById,
  selectAllUsers,
  selectUsersResult,
} from './usersSlice'
import { useEffect } from 'react'
export default function UsersList() {
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
  return <div>{JSON.stringify(a.data)}</div>
}
