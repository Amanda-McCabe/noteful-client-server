Noteful Server

There are two top level endpoints:

/folders
/notes
Both support GET, POST, PUT, PATCH and DELETE requests. For PUT, PATCH and DELETE requests you must supply the respective id in the endpoint's path.

For example:

GET /notes
GET /folders
POST /notes
POST /folders
PATCH /notes/{note-id}/
PATCH /folders/{folder-id}/
DELETE /notes/{note-id}/
DELETE /folders/{folder-id}/
To start the server, run npm start.