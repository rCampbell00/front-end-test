## Planarific Front-End Test

Front-end system is written using a Next.js server
The API Token is protected through the use of server actions. These only run on the server side so the token is never seen by the client side webpage.

## SETUP

The github includes a Dockerfile to run the system using.
Do note, the env.local file containing the API key is not included on the github (for security reasons), so a new file will need to be created and store the variable:
API_KEY=