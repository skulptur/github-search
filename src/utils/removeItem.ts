export const removeItem = <T>(items: Array<T>, index: number): Array<T> => {
  if (index > -1) {
    items.slice(index, 1)
  }

  return items
}
