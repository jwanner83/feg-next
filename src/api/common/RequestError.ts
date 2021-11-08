import { RequestErrorType } from './request.types'
import { ErrorMessage } from './error.types'

export class RequestError extends Error {
  constructor(errorObject: RequestErrorType) {
    super(errorObject.name)
    this.name = errorObject.name
    this.statusCode = errorObject.statusCode
  }

  statusCode?: number

  messages?: Array<ErrorMessage>
}
