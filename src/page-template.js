const generateMembers = teamArr => {
  console.log('running');
  console.log('template file running');

  const htmlData = [];
    let manager = teamArr.filter(team => team.getRole()=== 'Manager');

  htmlData.push(manager
    .map(element => generateManagerHTML(element)));

  let engineer = teamArr.filter(team => team.getRole()=== 'Engineer');
  htmlData.push(engineer
    .map(engineer => generateEngineerHTML(engineer)));

  let intern = teamArr.filter(team => team.getRole()=== 'Intern');
  htmlData.push(intern
    .map(intern => generateInternHTML(intern)));

  generateManagerHTML = (managerData) => {
    return `
    <div class="card col-md-auto" style="width: 18rem;">
    <div class="card-body manager">
      <h5 class="card-title managerName">Name: ${managerData.name}</h5>
      <p class="card-text managerRole">Role: Manager</p>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item managerId">ID: ${managerData.id}</li>
        <li class="list-group-item managerEmail">Email: ${managerData.email}</li>
        <li class="list-group-item managerONumber">Office Number: ${managerData.officeNumber}</li>
      </ul>
    </div>
    `
  };

  for (var i = 0; i < engineer.length - 1; i++) {
    let htmlEng = generateEngineerHTML(engineer[i]);
    htmlData.push(htmlEng);
  }
  generateEngineerHTML = (EngData) => {
    return `
    <div class="card col-md-auto" style="width: 18rem;">
    <div class="card-body engineer">
      <h5 class="card-title engineerName">Name: ${EngData.name}</h5>
      <p class="card-text engineerRole">Role: Engineer</p>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item engineerId">ID: ${EngData.id}</li>
        <li class="list-group-item engineerEmail">Email: ${EngData.email}</li>
        <li class="list-group-item engineerGithub">Github: ${EngData.github}</li>
      </ul>
    </div>
    `
  };

  for (var i = 0; i < intern.length -1; i++) {
    let htmlInt = generateInternHTML(intern[i]);
    htmlData.push(htmlInt);
  }
  generateInternHTML = (internData) => {
    return `
    <div class="card col-md-auto" style="width: 18rem;">
    <div class="card-body intern">
      <h5 class="card-title internName">Name: ${internData.name}</h5>
      <p class="card-text internRole">Role: Intern</p>
    </div>
      <ul class="list-group list-group-flush">
        <li class="list-group-item internId">ID: ${internData.id}</li>
        <li class="list-group-item internEmail">Email: ${internData.email}</li>
        <li class="list-group-item internSchool">School: ${internData.school}</li>
      </ul>
    </div>
    `
  }
  return htmlData.join();
}

module.exports = teamHTML => {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.css">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"></script>
    <title>Team Profile Generator</title>
  </head>
  <body>
  <header class="card header text-center">
    <h1>Team Profile Generator</h1>
  </header>
    <br>
    <div class="container">
    <div class="row">
      ${generateMembers(teamHTML)} 
    </div>
    </div>
  </body>
  </html>
  `
};

