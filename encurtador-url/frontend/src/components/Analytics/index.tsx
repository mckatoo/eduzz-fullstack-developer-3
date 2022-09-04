const Analytics = () => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${process.env.REACT_APP_PUBLIC_GA_TRACKING}`}
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.REACT_APP_PUBLIC_GA_TRACKING}');
          `
      }}
    />
  </>
)

export default Analytics