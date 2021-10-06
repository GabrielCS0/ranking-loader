/* eslint-disable @typescript-eslint/no-explicit-any */
export type HttpResponse<T = any> = {
  statusCode: number
  data: T
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  data: error.stack
})

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const success = (data: any): HttpResponse => ({
  statusCode: 200,
  data
})
