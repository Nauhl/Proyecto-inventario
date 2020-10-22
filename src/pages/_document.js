import Document, { Html, Head/*, Main*/, NextScript } from 'next/document'

class MyDocument extends Document {
  
  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
        
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

/*<Main />*/