import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function cpfToView(cpf: string) {
  const first = cpf.slice(0, 3)
  const second = cpf.slice(3, 6)
  const third = cpf.slice(6, 9)
  const digit = cpf.slice(9)

  return `${first}.${second}.${third}-${digit}`
}

export function validateCPF(cpf: string) {
  cpf = cpf.replace(/\D/g, '')

  if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
    return false
  }

  let sum = 0
  for (let i = 0; i < 9; i++) {
    sum += parseInt(cpf[i]) * (10 - i)
  }
  let digit1 = sum % 11
  digit1 = digit1 < 2 ? 0 : 11 - digit1

  sum = 0
  for (let i = 0; i < 10; i++) {
    sum += parseInt(cpf[i]) * (11 - i)
  }
  let digit2 = sum % 11
  digit2 = digit2 < 2 ? 0 : 11 - digit2

  return parseInt(cpf[9]) === digit1 && parseInt(cpf[10]) === digit2
}

export function generateCPF(): string {
  const rnd = (n: number): number => Math.round(Math.random() * n)
  const mod = (base: number, div: number): number =>
    Math.round(base - Math.floor(base / div) * div)

  const n: number[] = Array(9)
    .fill(0)
    .map(() => rnd(9))

  let d1: number = n.reduce(
    (total, number, index) => total + number * (10 - index),
    0,
  )
  d1 = 11 - mod(d1, 11)
  if (d1 >= 10) d1 = 0

  let d2: number =
    d1 * 2 +
    n.reduce((total, number, index) => total + number * (11 - index), 0)
  d2 = 11 - mod(d2, 11)
  if (d2 >= 10) d2 = 0

  return `${n.join('')}${d1}${d2}`
}

export function generateName(): string {
  const firstNames = [
    'Lionel',
    'Cristiano',
    'Neymar',
    'Ronaldinho',
    'Andres',
    'Rodrygo',
    'Sergio',
    'Robert',
  ]

  const lastNames = [
    'Messi',
    'Ronaldo',
    'Gaucho',
    'Mbappé',
    'Iniesta',
    'Goes',
    'Ramos',
    'Lewandowski',
  ]

  const firstNameIndex = Math.floor(Math.random() * firstNames.length)
  const lastNameIndex = Math.floor(Math.random() * lastNames.length)

  return `${firstNames[firstNameIndex]} ${lastNames[lastNameIndex]}`
}

export function generateEmail(name: string): string {
  const cleanedName = name.toLowerCase().replace(' ', '')
  const emailProvider = [
    'gmail.com',
    'yahoo.com',
    'hotmail.com',
    'outlook.com',
    'example.com',
  ]

  const randomEmailIndex = Math.floor(Math.random() * emailProvider.length)
  return `${cleanedName}@${emailProvider[randomEmailIndex]}`
}

export function generatePhone(): string {
  const phone: string[] = []
  const areaCodeList = ['63', '79', '11', '47', '95', '69', '52']

  const areaCodeIndex = Math.floor(Math.random() * areaCodeList.length)

  new Array(9).fill(undefined).forEach(() => {
    const randomDigit = Math.floor(Math.random() * 9)
    phone.push(randomDigit.toString())
  })

  return `${areaCodeList[areaCodeIndex]}${phone.join('')}`
}

export function validatePhoneNumber(phone: string) {
  const cleanedPhoneNumber = phone.replace(/\D/g, '')

  if (cleanedPhoneNumber.length < 10 || cleanedPhoneNumber.length > 11) {
    return false
  }

  return true
}

export function phoneViewToDomain(phone: string): string {
  if (!validatePhoneNumber(phone)) return phone

  const cleanedPhoneNumber = phone.replace(/\D/g, '')

  const indexSlicePhone = cleanedPhoneNumber.length > 10 ? 7 : 6

  const countryCode = '+55'
  const areaCode = cleanedPhoneNumber.slice(0, 2)
  const firstPart = cleanedPhoneNumber.slice(2, indexSlicePhone)
  const secondPart = cleanedPhoneNumber.slice(indexSlicePhone ? 7 : 6)

  return `${countryCode} ${areaCode} ${firstPart}-${secondPart}`
}

export function phoneToView(phone: string): string {
  const indexSlicePhone = phone.length > 10 ? 7 : 6

  const areaCode = phone.slice(0, 2)
  const firstPart = phone.slice(2, indexSlicePhone)
  const secondPart = phone.slice(phone.length > 10 ? 7 : 6)

  return `(${areaCode}) ${firstPart}-${secondPart}`
}

export function phoneDomainToView(phone: string) {
  const cleanedPhoneNumber = phone.replace(/\D/g, '')

  if (cleanedPhoneNumber.length < 12) return phone

  const areaCode = cleanedPhoneNumber.substring(2, 4)
  const firstPart = cleanedPhoneNumber.substring(
    4,
    cleanedPhoneNumber.length > 12 ? 9 : 8,
  )
  const secondPart = cleanedPhoneNumber.substring(
    cleanedPhoneNumber.length > 12 ? 9 : 8,
  )

  const formattedPhoneNumber = `(${areaCode}) ${firstPart}-${secondPart}`

  return formattedPhoneNumber
}
