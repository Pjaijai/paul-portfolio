import * as React from 'react'
import type { HeadFC, PageProps } from 'gatsby'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <div>Hi, my name is</div>
      <h1>Paul Wong</h1>
      <h1>I build good things for web</h1>
      <h6>
        I am a full stack software engineer with a passion for creating
        beautiful, functional user interfaces. I specialize in the front-end
        development of web applications, utilizing modern technologies such as
        HTML5, CSS3, JavaScript, and React. With my experience in both
        client-side and server-side development, I can provide a comprehensive
        solution for any web project.
      </h6>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
