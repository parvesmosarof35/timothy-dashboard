import React from 'react'
import PendingVerification from '../../../components/dashboard/PendingVerification'
import CommunicationSupport from '../../../components/dashboard/CommunicationSupport'

const CommAndverification = () => {
  return (
    <div className='flex flex-row-reverse justify-center items-center gap-0'>
        <CommunicationSupport></CommunicationSupport>
        <PendingVerification></PendingVerification>
    </div>
  )
}

export default CommAndverification