import { useSelector } from 'react-redux'
import {
  useGetUsersQuery,
  selectUsersResult,
  selectUserById,
  selectAllUsers,
} from './usersSlice'
export default function UsersList() {
  const user = useSelector((state) => selectUserById(state, 1))
  const all = useSelector((state) => selectAllUsers(state))
  //   const { data } = useGetUsersQuery()
  console.log(all)
  return <div>2222</div>
}
