import { useGetPostQuery } from '../../services/posts'
export default function PostsList() {
  const { data: post } = useGetPostQuery(1)
  console.log(post)
  return <div>111</div>
}
