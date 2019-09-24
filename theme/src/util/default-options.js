module.exports = themeOptions => {
  const trackingId = themeOptions.trackingId || `UA-11111XXX-1`
  const projectsPath = themeOptions.projectsPath || `projects`
  const projectsPerPage = themeOptions.projectsPerPage || `4`
  const imagesPath = themeOptions.imagesPath || `images`

  return {
    trackingId,
    projectsPath,
    projectsPerPage,
    imagesPath
  }
}