import { Dispatch } from 'redux'
import { getDataAPI, postDataAPI } from '../../utils/fetchData'
import { ALERT, IAlertAction } from '../types/alertTypes'
import { GET_RECEIVED_INVITATION, IGetInvitationAction, ISendInvitationAction, SEND_INVITATION } from '../types/invitationTypes'

export const sendInvitation = (jobId: string, userId: string, token: string) => async(dispatch: Dispatch<ISendInvitationAction | IAlertAction>) => {
  try {
    const res = await postDataAPI('invitation', { jobId, userId }, token)
    dispatch({
      type: SEND_INVITATION,
      payload: res.data.invitation
    })

    dispatch({
      type: ALERT,
      payload: {
        success: res.data.msg
      }
    })
  } catch (err: any) {
    dispatch({
      type: ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}

export const getReceivedInvitations = (token: string) => async(dispatch: Dispatch<IGetInvitationAction | IAlertAction>) => {
  try {
    dispatch({
      type: ALERT,
      payload: {
        loading: true
      }
    })

    const res = await getDataAPI('invitation', token)
    dispatch({
      type: GET_RECEIVED_INVITATION,
      payload: res.data.invitations
    })
  } catch (err: any) {
    dispatch({
      type: ALERT,
      payload: {
        error: err.response.data.msg
      }
    })
  }
}