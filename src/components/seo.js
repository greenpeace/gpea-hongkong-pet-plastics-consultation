import { Helmet } from 'react-helmet-async'
const SEO = () => {
  return (
    <Helmet>
      <html lang='zh' />
      {/* campaign dataLayer */}
      <script>
        {`
          var dataLayer = (window.dataLayer = window.dataLayer || []);
          dataLayer.push({
            gCampaign: "",
            gBasket: "",
          });
        `}
      </script>
      {/* title */}
      <title>Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content=''
      />
      <meta
        property='og:description'
        content=''
      />
      {/* meta image */}
      <meta
        property='og:image'
        content=''
      />
    </Helmet>
  )
}

export default SEO
