REM install Node.js from website
REM http://nodejs.org/download/

npm init
REM	You can press enter to each of the queries, including (yes) to save

npm install @mysql/xdevapi --save --save-exact
REM there are several versions of the connector library
REM this one doesn't require legacy login

node runthis.js
REM this will run a single javascript file
REM you will need to change the username and password
REM and possibly the schema
REM We'll be exploring different queries during the sync session


npm install express
REM this is an optional library I used to serve web page requests

node serverExpress.js
REM this will start a server on port 3000
