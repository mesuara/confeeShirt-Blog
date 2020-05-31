import React from "react"
import { Container, FeatureImage, Content, ContentCard } from "../components"

export const IndexPage = () =>{
  return (
    <Container>
      <FeatureImage/>
      <Content>
        <ContentCard date="2020" title="Palidhje" exerpt="Tu testu diqka qetu, spo di" slug="/test-blog"/>
      </Content>
    </Container>


  )
}

export default IndexPage