export const taxIdMask = (taxId: string) => {
  const firstPart = taxId.slice(0, 3)
  const secondPart = taxId.slice(3, 6)
  const thirdPart = taxId.slice(6, 9)
  const fourthPart = taxId.slice(9)

  return `${firstPart}.${secondPart}.${thirdPart}-${fourthPart}`
}
