import { useSelector } from 'react-redux'
import {
  useGetUsersQuery,
  selectUserById,
  selectAllUsers,
  selectUsersResult,
} from './usersSlice'
export default function UsersList() {
  const all = useSelector((state) => selectAllUsers(state))
  const a = useSelector((state) => selectUsersResult(state))
  //   const { data } = useGetUsersQuery()
  console.log(a)
  return <div>2222</div>
}
