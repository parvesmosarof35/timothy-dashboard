import React from 'react'
import PendingVerification from '../../../components/dashboard/PendingVerification'
import CommunicationSupport from '../../../components/dashboard/CommunicationSupport'

const CommAndverification = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-6  mx-auto  rounded-2xl'>
        <CommunicationSupport></CommunicationSupport>
        <PendingVerification></PendingVerification>
    </div>
  )
}

export default CommAndverification