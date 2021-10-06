import { HttpResponse } from '@presentation/contracts'

export interface IController {
  handle(): Promise<HttpResponse>
}
