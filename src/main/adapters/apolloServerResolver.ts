/* eslint-disable @typescript-eslint/no-explicit-any */
import { IController } from '@presentation/contracts'

export const adaptResolver = async (controller: IController): Promise<any> => {
  const httpResponse = await controller.handle()
  return httpResponse.data
}
