# nodeJS notes
    Javascript on server.
    Node JS is a Javascript Runtime.
    We can use node JS to run javascript outside of browser.
    Uses V8 javascript engine that run JS into the browser.
        Takes JS code and compiles to machine code.
        V8 is written in C++.
    To check the node version.
        Command: node -v .
    You can use it for more than just server side code.
        Eg. utility scripts, build tools, ...

    Execute Files.
        Used for real apps.
        Predictable sequence of steps.
    Use the REPL (type 'node' in cmd).
        Great playground.
        Execute code as you write it.

# node JS role (in Web development)
    Run Server
        create server and listen to incoming requests
    Buisness Logic
        Handle requests, Validate inputs, connect to DB
    Responses
        return Responses (Rendered HTML, JSON, ...)  

# REPL
    Read    -   read user input
    Eval    -   evaluate user input
    Print   -   print output (Result)
    Loop    -   Wait for new input

# Javascript summary
    Weakly Types Language
        No Explicit type assignment
        Datatypes can be switched dynamically
    Object-Oriented Language
        Data can be organized in logical objects
        Primitive and reference type
    Versatile Language
        Runs in browser & directly on PC/server
        Can perform a broad varity of tasks

# HTTP, HTTPS
    HTTP
        HyperText Transfer Protocol
        A Protocol for transfering data which is understood by browser and server
    HTTPS
        HyperText Transfer Protocol Secure
        HTTP + Data Encryption (during Transmission)

# Node JS Core Modules
    http
        launch a server, send request
    https
        launch a SSL server
    fs
    path
    os

# Node JS Program Lifecycle
    client=>request=>server=>response=>client

    node server.js  ->  Start Script    ->  Parse code, Register Variables and Functions    ->  event loop  ->  process.exit

    NodeJS runs non-blocking JS code and uses an event-driven code (event-loop) for running your logic
    A Node program exits as soon as there is no more work to do
    Note: the createServer() event never finishes by default

    event loop
        a loop process which is managed by nodeJS which keeps on running as long as there is work to do
        OR
        keeps on running as long as there are event listners registered

        The Node Application
            Single threaded Javascript
        automatically starts by nodeJS.
        responsible for handling event callbacks
        
        -timer callbacks
            executes setTimeout, setInterval Callbacks
        -pending callbacks
            executes I/O-related callbacks that were deferred
        -poll
            retrieve new I/O events, executes their callbacks
            also checks any timer callback due to be executed, if callback is there, then it jumps to the timer callback
            also check if deferred callbacks is pending, then it jumps to the pending callback
        -check
            execute setImmediate() callbacks
        -close callbacks
            executes all 'close' events callback
        process.exit
            if no other callbacks left
    
    for file system (fs) operations send to Worker Pool for long taking operations
        Worker pool also managed by nodeJS
            do the heavy lifting
            runs on different threads
            once a worker is done (eg. finishes writing a file), it will trigger a callback

    Asynchronous Code
        JS code is non-blocking
        Use callbacks and events => Order changes!
    
    Requests & Responses
        parse request data in chunks (Streams & Buffers)
        avoid "double responses"

# NPM - node package manager
    it allows you you to manage your node project and its dependencies.
    you can initialize a project with "npm init".
    npm scripts can be defined in package.json to give you shortcuts to common tasks/commands.

    npm init : to create package.json file
    npm start : to start the application
    npm run start-server : to run the script

    node projects typically don't just use core modules and custom code but also uses 3rd party packages.
    you can install via npm
    you can differentiate b/w production dependencies(--save), development dependenies(--save-dev) and global dependencies(-g)

    to install node packages
        npm install packagename --save-dev  //to install in development server only
        npm install packagename --save  //to install in production server
        npm install packagename -g  //to install package globally on machine

        some npm packages:
            nodemon //live server, refreshes on save
                to use nodemon, change in package.json
                    "start": "nodemon server.js"
    
# Types of error
    Syntax, runtime and logical errors can break your app.
    Syntax and runtime errors throw helpful error messages with line numbers.
    Logical errors can be fixed with testing and help of debugger

    Debugging:
        Use VS code Node debugger to step into your code and go through it step by step.
        Analyse variable values at runtime.
        Look into the variable at runtime.
        Set breakpoints cleverly(i.e. respect the async/event driven nature).

# Express.js
    Server side logic is complex.
    You want to focus on your Buisness Logic, not on the details.
    Use a framework for the heavy lifting.
    Express.js helps with this.
    Express.js is a node.js framework - a package that adds a bunch of utility functions and tools and a clear set of rules on how the app should be build(middleware).
    It's highly extensible and other packages can be plugged into it(middleware).

    Middleware, next(), res()
        Express.js relies heavily on middleware functions - you can easily add them by calling use().
        Middleware functions handle a request and should call next() to forward the request to the next function in line or send a response.
    
    Routing
        You can filter requests by path and method.
        If you filter by method, paths are matched exactly, otherwise the first segment of URL is matched.
        You can use the express.Router to split your routes across files elegantely.

    Serve Files
        You are not limited to serving the dummy text as a response.
        You can use sendFile() to users. eg.HTML file.
        If a request is directly made for a file (eg. css file is requested), you can enable static serving for such files via express.static()

    to install expressJS
        npm install --save express
        npm install --save body-parser //to add 3rd party module for parsing the requests

    express.js is all about the middleware
        request => middleware[req, res, next] => response

    deprecated:
    module.exports = path.dirname(process.mainModule.filename);
    Use:
    module.exports = path.dirname(require.main.filename);
    