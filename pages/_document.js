import { Html, Head, Main, NextScript } from "next/document"

export default function Document() {
    return (

        <Html>
            <Head>
                <link 
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" 
                    rel="stylesheet" 
                    integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" 
                    crossOrigin="anonymous" />
                <link 
                    rel="stylesheet"
                    href="css/globals.css"
                    />
            </Head>
            <body>
                <div className="container">
                    <Main />
                    
                </div>
                <NextScript />
            </body>
        </Html>

    );
}