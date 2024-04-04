import Link from 'next/link'
import React from 'react'
import SvgHome from './home'
import SvgProject from './project'
import SvgMail from './mail'
import SvgUser from './user'
import SvgNull from './null'
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
  if(props.title == "null"){
    return (
      <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgNull width="30" height="30" viewBox="0 0 50 50" /></Link>
    )
    
  }
  if(props.title == "mail"){
    return (
      <Link href={props.href} className={classNames('svgh m-auto', props.className)}><SvgMail width="30" height="30" viewBox="0 0 50 50" /></Link>
    )
  }  
}

export default Icon