#!bin/bash
sudo npm install

pm2 describe server > /dev/null

RUNNING=$?
if [ "${RUNNING}" -ne 0 ]; then
	pm2 start server.js
else
	pm2 restart server.js
fi