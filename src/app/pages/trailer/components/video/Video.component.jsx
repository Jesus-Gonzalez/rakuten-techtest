import React from 'react'

import styles from './Video.styles'

const Video = props => {
  const { data } = props

  const src = React.useMemo(() => (
    data.stream_infos[0].url
  ), [data])

  return (
    <video
      className={styles.video}
      autoPlay
      controls
    >
      <source src={src} type='video/mp4' />
    </video>
  )
}

export default Video

