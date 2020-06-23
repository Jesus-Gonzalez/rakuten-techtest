import { useHistory } from 'react-router-dom'

export const useErrorPage = () => {
  const history = useHistory()

  const goBack = () => {
    history.goBack()
  }

  return {
    goBack,
  }
}
