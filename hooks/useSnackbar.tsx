/**
 * Customized set of snackbars based off Ant Design's message component,
 * provided as a React Hook.
 */
import { message } from 'antd'

const useSnackbar = (type: 'success' | 'error') => {
  const success = (content: string) =>
    message.success({
      content: content,
    })

  const error = (content: string) =>
    message.error({
      content: content,
    })

  if (type === 'success') {
    return [success]
  }
  return [error]
}

export default useSnackbar
