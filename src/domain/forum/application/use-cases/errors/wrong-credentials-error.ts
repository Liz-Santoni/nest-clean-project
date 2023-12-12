import { UseCaseError } from '@/core/errors/use-case-error'

export class WrongCredentalsError extends Error implements UseCaseError {
  constructor() {
    super('Credentials are not valid.')
  }
}
