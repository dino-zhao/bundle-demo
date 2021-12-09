import { useGetPostQuery } from '../../services/posts'
export default function PostsList() {
  const {} = useGetPostQuery(1)
  return <div>eee</div>
}
