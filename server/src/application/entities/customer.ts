import { randomUUID } from 'crypto'

export enum CustomerStatus {
  Active = 'ativo',
  Inactive = 'inativo',
  Waiting = 'aguardando ativação',
  Disabled = 'desativado',
}

export interface CustomerProps {
  _id?: string
  name: string
  email: string
  document: string
  phone: string
  status: CustomerStatus
  createdAt?: Date | null
  updatedAt?: Date | null
}

export class Customer {
  private _id: string
  private props: CustomerProps

  constructor(props: Omit<CustomerProps, '_id'>, id?: string) {
    this._id = id ?? randomUUID()
    this.props = props
    this.props.createdAt = props.createdAt ?? new Date()
    this.props.updatedAt = props.updatedAt ?? new Date()
  }

  public get id(): string {
    return this._id
  }

  public get name(): string {
    return this.props.name
  }

  public set name(name: string) {
    this.props.name = name
  }

  public get email(): string {
    return this.props.email
  }

  public set email(email: string) {
    this.props.email = email
  }

  public get document(): string {
    return this.props.document
  }

  public set document(document: string) {
    this.props.document = document
  }

  public get phone(): string {
    return this.props.phone
  }

  public set phone(phone: string) {
    this.props.phone = phone
  }

  public get status(): string {
    return this.props.status
  }

  public set status(status: CustomerStatus) {
    this.props.status = status
  }

  public get createdAt(): Date | undefined | null {
    return this.props.createdAt
  }

  public get updatedAt(): Date | undefined | null {
    return this.props.updatedAt
  }

  public update() {
    this.props.updatedAt = new Date()
  }
}
