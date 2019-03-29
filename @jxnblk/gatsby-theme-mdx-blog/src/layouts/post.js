import React from 'react'
import { useComponents } from 'emotion-mdx'
import Head from '../head'
import Header from '../header'
import Footer from '../footer'
import Layout from '../layout'
import Container from '../container'

export default props => {
  const Styled = useComponents()

  return (
    <Layout>
      <Head
        title={props.title}
        description={props.excerpt}
      />
      <Header />
      <Container>
        <Styled.h1>
          {props.title}
        </Styled.h1>
        <Styled.p fontSize={0}>
          <Styled.strong>
            {props.date}
          </Styled.strong>
        </Styled.p>
        {props.children}
      </Container>
      <Footer />
    </Layout>
  )
}
