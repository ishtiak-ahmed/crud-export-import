export const validation = (data) => {
  // if (Number.isNaN(data.id)) {
  //   return 'ID '
  // }
  if (!data.name?.length) {
    return 'Name is required'
  }
  if (!data.grade?.length) {
    return 'Grade is required'
  }
  if (!data.shift?.length) {
    return 'shift is required'
  }
  return false
}