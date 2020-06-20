import {
  useCarouselScroll,
  useCarouselUser,
} from './__hooks'

export default configuration => {
  const scrollHook = useCarouselScroll(configuration)
  // const userHook = useCarouselUser(configuration)

  return Object.assign({}, scrollHook)
  // return Object.assign({}, scrollHook, userHook)
}
