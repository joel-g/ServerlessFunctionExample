if (req.query.name || (req.body && req.body.name)) {
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: "Hello " + (req.query.name || req.body.name)
    };
}
else if (req.query.spongebob) {
    let reply = req.query.spongebob
    reply = reply.split("")
    for (let i = 0; i < reply.length; i++) {
        if (i % 2 == 0) {
            reply[i] = reply[i].toUpperCase();
            
        }
        else {
            reply[i] = reply[i].toLowerCase();
        }
    }
    reply = reply.join("")
    context.res = {
        body: reply
    }
}
else {
    context.res = {
        status: 400,
        body: "Whatever text you add to the URL after 'spongebob=' will be returned with alternating capitals like the spongebob caveman meme"
    };
}
context.done();
};