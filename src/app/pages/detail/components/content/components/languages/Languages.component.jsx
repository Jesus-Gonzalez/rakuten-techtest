import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './Languages.styles'

const propTypes = {
  item: PropTypes.object
}
export const Languages = ({ item }) => {
  const languages = React.useMemo(() => (
    item.view_options.private.streams[0].audio_languages
  ), [item])

  const subtitles = React.useMemo(() => (
    item.view_options.private.streams[0].subtitle_languages
  ), [item])

  return (
    <div className={styles.wrapper}>
      <h3>
        <FontAwesomeIcon
          icon='comment-dots'
        />
        <span className={styles.titleContent}>Idiomas y subtitulos</span>
      </h3>
      <div className={styles.table}>
        <div className={styles.languages}>
          <div className={styles.title}>Audio</div>
          <div className={styles.content}>
            {languages.map(l => l.name).join(', ')}
          </div>
        </div>
        <div className={styles.subtitles}>
          <div className={styles.title}>Subtitulos</div>
          <div className={styles.content}>
            {subtitles.map(l => l.name).join(', ')}
          </div>
        </div>
      </div>
    </div>
  )
}
Languages.propTypes = propTypes

export default Languages
