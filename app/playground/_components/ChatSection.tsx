import React, { useState } from 'react'
import { Messages } from '../[projectId]/page'
import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

type props={
    messages:Messages[],
    onSend:any
}

function ChatSection({messages,onSend}:props) {

    const [input,setInput]=useState<string>();

    const handleSend=()=>{
        if(!input?.trim())return;
        onSend(input);
        setInput('');
    }
  return (
    <div className='w-96 shadow h-[91vh] p-4 flex flex-col'>
      {/* Message Section */}
        <div className='flex-1 overflow-y-auto p-4 space-y-3 flex flex-col'>
            {messages?.length===0?
            (
                <p className='text-grey-400 text-center'>No messages yet</p>
            ):(
                messages.map((msg,index)=>(
                    <div key={index} className={`flex ${msg.role==='user'?'justify-end':'justify-start'}`}>
                        <div className={`p-2 rounded-lg max-w-[80%] ${msg.role==='user'?
                        'bg-gray-100 text-black'
                        :"bg-gray-300 text-black"}`}>
                            {msg.content}
                        </div>

                    </div>
                ))
            )    
        }
        </div>
      {/* Footer Input */}
      <div className='p-3 border-t flex items-center gap-2'>
        <textarea 
            className='flex-1 resize-none border rounded-lg px-3 py-2 focus:outline-none focus:ring-2'
            rows={1}
            placeholder='Type your message...'
            onChange={(event)=>setInput(event.target.value)}
        />
        <Button>
            <ArrowUp />
        </Button>
      </div>
    </div>
  )
}

export default ChatSection
