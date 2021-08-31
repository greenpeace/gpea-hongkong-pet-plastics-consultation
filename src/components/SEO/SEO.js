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
            gCampaign: "plastics",
            gBasket: "rdpt",
          });
        `}
      </script>
      {/* title */}
      <title>餐具走塑 關鍵一步 - Greenpeace 綠色和平 | 香港</title>
      <meta
        property='og:title'
        content='餐具走塑 關鍵一步 - Greenpeace 綠色和平 | 香港'
      />
      {/* description */}
      <meta
        name='description'
        content='急需你參與諮詢，立即提交意見書，促盡快管制即棄膠餐具！'
      />
      <meta
        property='og:description'
        content='急需你參與諮詢，立即提交意見書，促盡快管制即棄膠餐具！'
      />
      {/* meta image */}
      <meta
        property='og:image'
        content='https://www.greenpeace.org/static/planet4-hongkong-stateless/2021/08/54a6dd0a-20210812_rdpt_launchvisual-01.jpg'
      />
    </Helmet>
  )
}

export default SEO
