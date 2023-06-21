
require("yargs")
	.usage("Usage: $0 <command> [options]")
	.version()
	.command(require("./connect.js"))
	.help()
	.argv

