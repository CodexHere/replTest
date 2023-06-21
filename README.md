# Simple REPL tests

This utilizes 3 main scripts to attempt starting a `repl` through node, one of which relies on `moleculer-cli`, another instantiating directly through `molecular` and `moleculer-repl`, and a final one that uses native `node` with no additives.

`startDocker.sh` is provided to spin up a container as tested locally, with the caveat you will need to supply a valid `$NETWORK` env var, or it will default to `host`.


