import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="http://goenkasfashion.com/wp-content/uploads/2022/12/cropped-cropped-goenkasfnl-e1670398784834-32x32.png" sizes="32x32" />
        <link rel="icon" href="http://goenkasfashion.com/wp-content/uploads/2022/12/cropped-cropped-goenkasfnl-e1670398784834-192x192.png" sizes="192x192" />
        <link rel="apple-touch-icon" href="http://goenkasfashion.com/wp-content/uploads/2022/12/cropped-cropped-goenkasfnl-e1670398784834-180x180.png" />
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>

      </Head>
      <Script></Script>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
