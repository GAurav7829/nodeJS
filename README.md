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