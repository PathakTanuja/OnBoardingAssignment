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

// NVM Node Version Manager 

A command line tool for managing and switching various version of node in your machine.
Instead of using NPM(Node package Manager)to install and uninstall Node versions for your different projects, 
NVM allows you to install different versions of Node, and switch between these versions depending on the project that you're working on via the command line.

//
Node Module

modules to be the same as JavaScript libraries.
A set of functions you want to include in your application.
Module can be a single file or a collection of multiple files/folders.The module is handy because of their reusability and ability to break down complex piece of code into manageable chunks.
Three types of module we are using in Node js
Core Module : a built -in module that are part of platform and come with Node.js installation.
hese modules can be loaded into the program by using the required function.

const module = require('module_name');

Local Module 
Local modules are the modules that are created locally in your Node.js application. Local modules are created by a user for the purpose of function of one file call  in another file 


