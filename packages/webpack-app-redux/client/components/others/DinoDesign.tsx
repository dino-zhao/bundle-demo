import { Foo } from 'dinod'
import log from 'dinod/es/utils/console/log'

export default function DinoD() {
  console.log(log({ base: 'a', extra: 'qqqaaa' }))
  return <Foo title="test" />
}
