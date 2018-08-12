import { Register } from 'apibus'

@Register('demo')
export class Demo {
  test () {
    alert('demo')
  }
}
