module.exports = () => {
    `
    <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${data.teamName} Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
    <link rel="stylesheet" href="./dist/style.css">
</head>

<body>
    <section class="hero is-success">
        <div class="hero-body">
            <h1 class="title has-text-centered">
                ${data.teamName}
            </h1>
        </div>
    </section>
    <br>
    <div class="columns is-multiline is-mobile">
        ${data.manager}
        ${data.engineer}
        ${data.intern}
    </div>
</body>

</html>
    `
}