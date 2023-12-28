'use client'

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare } from 'lucide-react';
const Form = () => {


  return (

    <form className="flex flex-col gap-y-4" action="https://getform.io/f/73e2e40a-f072-452a-b315-080c295cb940" method="POST">
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='name' id='name' name='name' placeholder='Name'/>
        <User className="absolute right-6" size={20}/>
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Input type='email' id='email' name='email' placeholder='Email'/>
        <MailIcon className="absolute right-6" size={20}/>
      </div>
      {/* input  */}
      <div className="relative flex items-center">
        <Textarea id='message' name='message' placeholder='Type your message here.'/>
        <MessageSquare className="absolute top-4 right-6" size={20}/>
      </div>
      <Button type="submit" className='flex items-center gap-x-1 max-w-[166px]' >
        Let's Talk <ArrowRightIcon size={20}/>
      </Button>
    </form>
  );
};

export default Form;