"use client"
import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardFooter,
} from "@/components/ui/card";
import AuthHeader from './auth-header';
import BackButton from './back-button';


interface CardWrapperProps
{
    label: string,
    title: string,
    backBtnHref: string,
    backBtnLabel: string
    children: React.ReactNode
}


const CardWrapper = ({label, title, backBtnHref, backBtnLabel, children}: CardWrapperProps) => {
  return (
    <Card className='xl:w-1/4 md:w-1/2 shadow-md'>
      <CardHeader>
        <AuthHeader label={label} title={title}/>
      </CardHeader>
      <CardContent>
         {children}
      </CardContent>
      <CardFooter>
        <BackButton label={backBtnLabel} href={backBtnHref}/>
      </CardFooter>
    </Card>
  )
}

export default CardWrapper

