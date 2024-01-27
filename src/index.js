const server = require('./app')

const port = process.env.PORT || 8000

server.listen(port, () => {
	/* eslint-disable no-console */
	console.log(`Listening: http://localhost:${port}`)
	/* eslint-enable no-console */
})
