import React from 'react'
import PendingVerification from '../../../components/dashboard/PendingVerification'
import CommunicationSupport from '../../../components/dashboard/CommunicationSupport'

const CommAndverification = () => {
  return (
    <div className='flex flex-row-reverse justify-center items-center gap-0 max-w-6xl mx-auto bg-[#ffffff] p-6 rounded-2xl'>
        <CommunicationSupport></CommunicationSupport>
        <PendingVerification></PendingVerification>
    </div>
  )
}

export default CommAndverification