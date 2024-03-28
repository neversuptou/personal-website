import Link from 'next/link'
import React from 'react'
import SvgHome from './home'
import SvgProject from './project'
import SvgMail from './mail'
import SvgUser from './user'
import SvgStack from './stack'
import classNames, { type Argument } from "classnames";

const Icon = (props:{title:string, href:string,className: Argument}) => {
  if(props.title == "home"){
    return (
        <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgHome width="30" height="30" viewBox="0 0 50 50" /></Link>
      )
      
  }
  if(props.title == "user"){
    return (
      <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgUser width="30" height="30" viewBox="-5 0 50 50" /></Link>
    )
  }
  if(props.title == "project"){
    return (
      <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgProject width="30" height="30" viewBox="0 0 50 50" /></Link>
    )
  }
  if(props.title == "stack"){
    return (
      <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgStack width="30" height="30" viewBox="0 0 50 50" /></Link>
    )
    
  }
  if(props.title == "mail"){
    return (
      <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgMail width="30" height="30" viewBox="0 0 50 50" /></Link>
    )
  }  
}

export default Icon