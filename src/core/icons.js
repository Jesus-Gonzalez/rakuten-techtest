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
  faStar
} from '@fortawesome/free-solid-svg-icons'

config.autoAddCss = false

console.log('faTwitter', faTwitter)

library.add(
  faPlayCircle,
  faEye,
  faThumbtack,
  faStar,
  faFacebook,
  faPinterest,
  faTwitter,
)
