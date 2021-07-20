import React, { FC } from "react"
import { NextSeo } from 'next-seo'
import siteMetadata from '../../constants/defaultSeo.json'
export const SEO = {
  title: siteMetadata.title,
  description: siteMetadata.description,
  openGraph: {
    type: 'website',
    locale: siteMetadata.language,
    url: siteMetadata.siteUrl,
    title: siteMetadata.title,
    description: siteMetadata.description,
    images: [
      {
        url: siteMetadata.siteImage,
        alt: siteMetadata.title,
        width: 1200,
        height: 600,
      },
    ],
  },
  twitter: {
    handle: siteMetadata.twitter,
    site: siteMetadata.twitter,
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'author',
      content: siteMetadata.author,
    },
  ],
}

export const PageSeo:FC<any> = ({metaData}) => {
  const { metaTitle, metaDescription, url, sharedImage:{alt, media}, preventIndexing, keywords } = metaData

  return (
      <NextSeo
        title={`${metaTitle}`}
        description={metaDescription}
        canonical={url}
        openGraph={{
          url: '',
          title: metaTitle,
          description:metaDescription,
          images: [
            {
              url: media.length>0 && media[0].url,
            }
          ]
        }}
        // twitter = {{
        //   handle: metaTitle,
        //   site: siteMetadata.twitter,
        //   cardType: 'summary_large_image',
        // }}
      />
    )
  }