import { createServer } from "http"
import { app } from "./app"
import config from "./lib/config"
import { sequelize } from "./lib/sequelize"
;(async () => {
	await sequelize.sync({})
	createServer(app).listen(config.port, () =>
		console.info(`Server running on port ${config.port}`)
	)
})()
