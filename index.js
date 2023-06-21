const Moleculer 	= require("moleculer");

const init = async () => {
	const broker = new Moleculer.ServiceBroker();
	await broker.start();
	broker.repl();
}

init();
