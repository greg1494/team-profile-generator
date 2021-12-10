module.exports = (email, github) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
    
    <body>
      <div><a href="mailto:${email}">Email</a></div>
      <div><a href="https://github.com/${github}">Github</a></div>
    </body>
    </html>
    `;
  };