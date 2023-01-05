import { Id } from "./helpers-type"

export default interface Job {
  title: string,
  location: string,
  salary: number,
  id: Id
}