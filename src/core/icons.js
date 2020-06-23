import '@fortawesome/fontawesome-svg-core/styles.css'
import {
  config,
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faTwitter,
  faFacebook,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'

import {
  faPlayCircle,
  faEye,
  faThumbtack,
  faStar,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

library.add(
  faPlayCircle,
  faEye,
  faThumbtack,
  faStar,
  faArrowLeft,
  faFacebook,
  faPinterest,
  faTwitter,
)