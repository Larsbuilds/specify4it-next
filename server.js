const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const hostname = 'localhost'
const port = 3000

const app = next({ 
  dev, 
  hostname, 
  port,
  conf: {
    experimental: {
      serverActions: {
        bodySizeLimit: '2mb',
      },
      serverComponentsExternalPackages: ['framer-motion'],
    }
  }
})

const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer(async (req, res) => {
    try {
      const parsedUrl = parse(req.url, true)
      
      // Increase timeout for all requests
      req.setTimeout(30000)
      res.setTimeout(30000)
      
      // Handle middleware errors gracefully
      if (req.url.includes('/_next/static/')) {
        res.statusCode = 404
        res.end('Not found')
        return
      }
      
      await handle(req, res, parsedUrl)
    } catch (err) {
      console.error('Error occurred handling', req.url, err)
      res.statusCode = 500
      res.end('Internal Server Error')
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://${hostname}:${port}`)
  })
}) 