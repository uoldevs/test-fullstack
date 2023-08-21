export const mobileMask = (mobile: string) => {
  const ddd = mobile.slice(0, 2)
  const firstPart = mobile.slice(2, 7)
  const secondPart = mobile.slice(7)

  return `(${ddd}) ${firstPart}-${secondPart}`
}
