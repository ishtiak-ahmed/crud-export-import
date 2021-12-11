export const validation = (data) => {
  // if (Number.isNaN(data.id)) {
  //   return 'ID '
  // }
  if (!data.name?.length) {
    return 'Name is required'
  }
  if (!data?.age > 0) {
    return 'Age is required'
  }
  if (!data.class > 0) {
    return 'Class is required'
  }
  return false
}