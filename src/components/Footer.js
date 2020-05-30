import React from 'react'
import {useStaticQuery, graphql} from "gatsby"
import {FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P} from "../elements"


export const Footer =() =>{
    const data = useStaticQuery(graphql`
        query {
            facebook: file(relativePath: {eq: "facebooklogo.png"}){
                publicURL
            }
            instagram: file(relativePath: {eq: "instagramlogo.png"}){
                publicURL
            }
            twitter: file(relativePath: {eq: "twitterlogo.png"}){
                publicURL
            }
            linkedin: file(relativePath: {eq: "linkedinlogo.png"}){
                publicURL
            }
        }
    `)
    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a href="https://facebook.com" target="_blan" rel="noopener noreferrer">
                        <img src ={data.facebook.publicURL} alt="Facebook Logo"/>
                    </a>
                    <a href="https://instagram.com" target="_blan" rel="noopener noreferrer">
                        <img src ={data.instagram.publicURL} alt="Instagram Logo"/>
                    </a>
                    <a href="https://twitter.com" target="_blan" rel="noopener noreferrer">
                        <img src ={data.twitter.publicURL} alt="Twitter Logo"/>
                    </a>
                    <a href="https://linkedin.com" target="_blan" rel="noopener noreferrer">
                        <img src ={data.linkedin.publicURL} alt="Linkedin Logo"/>
                    </a>
                </FooterSocialIcons>
                <P size="xSmall" color="dark3" >2020 Company. All right reseved.</P>
            </FooterSocialWrapper>
        </FooterWrapper>
    )
}