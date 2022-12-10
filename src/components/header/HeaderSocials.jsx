import React from 'react'
import { BsLinkedin, BsTwitter, BsGithub } from 'react-icons/bs'

export default function HeaderSocials() {
  return (
    <div className='headersocials'>
      <a href="https://in.linkedin.com/" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><BsGithub /></a>
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><BsTwitter /></a>
    </div>
  )
}
