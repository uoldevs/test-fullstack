import { HttpException, HttpStatus } from '@nestjs/common'

export class CustomerNotFound extends HttpException {
  constructor() {
    super(
      {
        status: HttpStatus.NOT_FOUND,
        error: 'customer not found',
      },
      HttpStatus.NOT_FOUND,
    )
  }
}
