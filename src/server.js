import path from 'path'
import express from 'express'
import { Provider as ReduxProvider } from "react-redux"
import { renderToString } from 'react-dom/server'
import { StaticRouter} from 'react-router-dom'

import Layout from '../src/component/Layout'

const app = express()
const port = 8080

app.use( express.static( path.resolve(__dirname, '../dist')) )

app.get('/*', ( req, res ) => {
    const context = { }
    const store = createStore ()
    store.dispatch( initializeSession())

    const jsx = (
        <ReduxProvider store = { store }>
            <StaticRouter context = { context } location = { req.url }>
                <Layout />
            </StaticRouter>
        </ReduxProvider>
    )

    const reactDom = renderToString (jsx)
    const reduxState = store.getState()

    res.writeHead(200, { "Content-Type" : "text/html"})
    res.end( htmlTemplate (reactDom, reduxState) )
})


app.listen(port)

function htmlTemplate( reactDom , reduxState) {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>React SSR</title>
        </head>
        <body>
            <div id="app">${ reactDom }</div>
            <script>
                window.REDUX_DATA = ${ JSON.stringify( reduxState )}
            </script>
            <script src="../dist/bundle.js></script>
        </body>
        </html>
    `
}

