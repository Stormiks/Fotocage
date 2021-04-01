const getRoutesByRole = (role, arr) => {
  const tempRoutes = []
  const isUserRole = () => !!role

  if (!isUserRole()) return tempRoutes

  arr.some(r => {
    if (!Object.prototype.hasOwnProperty.call(r, 'meta') && r.children)
      getRoutesByRole(r.children)

    if (r.meta) {
      const permissions = r.meta.permissions

      if (Array.isArray(permissions) && permissions) {
        permissions.forEach(i => {
          if (i.role === role) {
            console.log(role)
            tempRoutes.push({
              title: r.meta.title,
              name: r.name,
              icon: r.name
            })
          }
        })
      }
    }
  })

  return tempRoutes
}

export default getRoutesByRole
