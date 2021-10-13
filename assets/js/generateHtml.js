
function generateHtml(data) {
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="assets/css/reset.css" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU" crossorigin="anonymous"> <!-- Link to bootstrap CSS -->
    <link rel="stylesheet" type="text/css" href="assets/css/style.css" />
</head>
<body>
    <h2> This is my name ${data.name} </h2>
    <p> I live in ${data.location} </p>
    <p> Here is a little bit abou me ${data.bio}</p>
    <p> <a href="https://www.github.com/${data.github}">Here is my Github link</a></p>
    <p> <a href="https://www.linkedin.com/in/${data.linkedin}">Here is my Linkedin link</a></p>





    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-/bQdsTh/da6pkI1MST/rWKFNjaCP5gBSY4sEBT38Q/9RBh9AH40zEOg7Hlq2THRZ" crossorigin="anonymous"></script>
    <script type="text/javascript" src="assets/js/index.js"></script>
</body>
</html>
    `
}

module.exports = generateHtml;