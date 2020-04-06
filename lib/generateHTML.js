function generateHTML(data) {
  return `<!DOCTYPE html>
    <html lang="en">
       <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="ie=edge" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"/>
          <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <!--  <link rel="stylesheet" href="style.css" /> -->
          <title>Team Members</title>
          
       </head>
       <body>
         

        <div class="card"></div>
        <div class="card-header">
          <h2><strong>Name</strong></h2>
          <h2>${data.rol}</h2>
        </div>
        <div class="card">
          <h3><strong>ID:</strong> <span id="idnum">{id}</span></h3>
        </div>
        <div class="card">
          <h3><strong>${data.email}</strong> <span id="email">{ email}</span></h3>
        </div>
        <div class="card">
          <h3><strong>Office Number:</strong> <span id="phone">{ officeNumber}</span></h3>
        </div>
      </div>
       </body>
    </html>`;
}

module.exports = generateHTML;