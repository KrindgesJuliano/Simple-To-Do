import { v4 as uuidV4 } from 'uuid'

class Task {
  id?: string
  title: string
  checked: boolean
  created_at: Date

  constructor() {
    if (!this.id) {
      this.id = uuidV4()
    }
  }
}

export { Task }
