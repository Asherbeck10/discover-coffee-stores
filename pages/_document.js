import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link  href='/fonts/IBMplexSans-Bold.ttf' as="font" crossOrigin='anonymous'>
        </link>
        <link href='/fonts/IBMplexSans-Regular.ttf' as="font" crossOrigin='anonymous'>
        </link>
        <link  href='/fonts/IBMplexSans-SemiBold.ttf' as="font" crossOrigin='anonymous'>
        </link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
