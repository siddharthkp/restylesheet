import React from 'react'
import { Helmet } from 'react-helmet'

const Stylesheet = ({ url }) => (
  <Helmet>
    <link rel="stylesheet" type="text/css" href={url} />
  </Helmet>
)

export default Stylesheet
