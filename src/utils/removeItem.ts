export const removeItem = <T>(items: Array<T>, index: number): Array<T> => {
  if (index > -1) {
    const newArray = [...items]
    newArray.splice(index, 1)
    return newArray
  }
  return items
}
