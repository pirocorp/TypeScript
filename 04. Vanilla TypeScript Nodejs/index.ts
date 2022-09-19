import http from 'http';

const server = http.createServer((request, response) => {
    console.log('Request received');

    console.log(request.method);
    console.log(request.headers);
    console.log(request.url);    

    response.write(helloWorld);
    response.end();
});

server.listen(3000);

const helloWorld = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hello World</title>
</head>
<body>
    <h1>Hello World</h1>
</body>
</html>`;