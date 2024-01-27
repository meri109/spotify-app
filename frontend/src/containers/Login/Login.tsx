import path from 'path';
import * as React from 'react';
import Actionbar from '../Actionbar/Actionbar';

export interface ILoginProps {
}

export default function Login (props: ILoginProps) {
  function forLogin(){
    if (<Login />){
      <Actionbar/>
    }
  }
  return (
    <div className='text-white mt-36'>
      Login
    </div>
  );
}
