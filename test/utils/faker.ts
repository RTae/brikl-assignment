import { v4 as uuidv4 } from 'uuid'

class Faker {
  public text() {
    return 'sdsd'
  }

  public datetime() {
    const start = new Date(2012, 0, 1)
    const end = new Date()
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime()),
    )
  }

  public number() {
    return Math.random() * 100
  }

  public uuid() {
    return uuidv4()
  }
}

export default new Faker()
