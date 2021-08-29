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
        <div class="column is-4">
            <div class="card">
                <header class="card-header color-fill">
                    <h1 class="card-header-title">
                        Manager ☕
                    </h1>
                </header>
                <div class="card-content">
                    <div class="hero">
                        <h1 class="subtitle employee-name">
                            Scott
                        </h1>
                    </div>
                    <br>
                    <div class="content">
                        <p>ID: 1</p>
                        <p>Email: <a href="scott@fakemail.com" class="text-reset">scott@fakemail.com</a></p>
                        <p>Office #: 124</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-4">
            <div class="card">
                <header class="card-header color-fill">
                    <h1 class="card-header-title">
                        Engineer 🛠️
                    </h1>
                </header>
                <div class="card-content">
                    <div class="hero">
                        <h1 class="subtitle employee-name">
                            Bobby
                        </h1>
                    </div>
                    <br>
                    <div class="content">
                        <p>ID: 2</p>
                        <p>Email: <a href="bobby@fakemail.com" class="text-reset">bobby@fakemail.com</a></p>
                        <p>GitHub: <a href="https://github.com/jsiraco" class="text-reset" target="_blank">bhoffman</a></p>                    </div>
                </div>
            </div>
        </div>
        <div class="column is-4">
            <div class="card">
                <header class="card-header color-fill">
                    <h1 class="card-header-title">
                        Engineer 🛠️
                    </h1>
                </header>
                <div class="card-content">
                    <div class="hero">
                        <h1 class="subtitle employee-name">
                            Mike
                        </h1>
                    </div>
                    <br>
                    <div class="content">
                        <p>ID: 3</p>
                        <p>Email: <a href="mike@fakemail.com" class="text-reset">mike@fakemail.com</a></p>
                        <p>GitHub: <a href="https://github.com/jsiraco" class="text-reset" target="_blank">mfearley</a></p>
                    </div>
                </div>
            </div>
        </div>
        <div class="column is-4">
            <div class="card">
                <header class="card-header color-fill">
                    <h1 class="card-header-title">
                        Intern ✏️
                    </h1>
                </header>
                <div class="card-content">
                    <div class="hero">
                        <h1 class="subtitle employee-name">
                            Joe
                        </h1>
                    </div>
                    <br>
                    <div class="content">
                        <p>ID: 1</p>
                        <p>Email: <a href="jared@fakemail.com" class="text-reset">josef@fakemail.com</a></p>
                        <p>GitHub: <a href="https://github.com/jsiraco" class="text-reset" target="_blank">jsiraco</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
</body>

</html>
    `
}