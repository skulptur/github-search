export const truncate = (text: string, length: number) => {
  const trimmed = text.trim()
  return trimmed.length > length ? trimmed.substring(0, length) + '…' : trimmed
}
