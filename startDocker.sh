#!/bin/sh

NETWORK=${NETWORK:-host}


docker run --network $NETWORK -e TRANSPORTER=nats://nats:4222 --rm -it -u $(id -u) -w /npx -v "$(pwd):/npx" node:lts-alpine ash
