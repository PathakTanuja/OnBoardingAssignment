** Introduction about NodeJs
Node.js  is an open-source server side runtime environment built on Chrome’s V8 Java Script engine.
Node.js runs on various platforms(Window ,Linux,Unix,Mac Os etc)
Node.js uses JavaScript on the server

Node.js uses asynchronous programming

A common task for a web server can be to open a file on the server and return the content to the client.

how Node.js handles a file request:
1. Sends the task to the computer's file system.
2. Ready to handle the next request.
3. When the file system has opened and read the file, the server returns the content to the client.
Node.js eliminates the waiting, and simply continues with the next request.
Node.js runs single-threaded, non-blocking, asynchronous programming, which is very memory efficient.

Node.js can do following work
* Node.js can generate dynamic page content
* Node.js can create, open, read, write, delete, and close files on the server
* Node.js can collect form data
* Node.js can add, delete, modify data in your database