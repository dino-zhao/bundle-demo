import { useAppSelector } from '@components/redux/app/store'
import {
  useGetUsersQuery,
  selectUserById,
  selectAllUsers,
  selectUsersResult,
} from './usersSlice'
export default function UsersList() {
  const a = useAppSelector((state) => selectUsersResult(state))
  //   const { data } = useGetUsersQuery()
  return <div>{JSON.stringify(a.data)}</div>
}
