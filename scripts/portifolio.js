fetch('https://api.github.com/users/raissonsouto/repos')
    .then(res => res.json())
    .then(data => data.forEach(project => createGithubContentBox(project)))

    function createGithubContentBox(data) {
        document.getElementById('repos').innerHTML += `
            <div class='github-repo'>
                <div class='github-title'><a href='${data.clone_url}'>${data.name}</a></div>
                <div class='github-description' id='github-description-${data.name}'></div>
                <div class='github-info'>
                    <div>
                        <div class='github-ball'></div>
                        <div class='github-language' id="github-language-${data.language}"></div>
                    </div>
                    <div class='github-star' id='github-star-${data.name}'></div>
                    <div class='github-fork' id='github-fork-${data.name}'></div>
                </div>
            </div>
        `
        if(data.description != null) document.getElementById(`github-description-${data.name}`).innerHTML = data.description.substring(0, 75)

        document.getElementById(`github-language-${data.name}`).style.color = gitapi.match(data.language)

        //
        if(data.language != null) document.getElementById(`github-language-${data.name}`).innerHTML = ${data.language}
        

        // coloca o contador de estrelas se data.stargazers_count > 0
        if(data.stargazers_count != 0) document.getElementById(`github-star-${data.name}`).innerHTML = `<img class='github-fork-img' src='../static/images/star.png'/ alt='star'> `+data.stargazers_count
        

        // coloca o contador de fork se data.fork > 0
        if(data.forks != 0) document.getElementById(`github-fork-${data.name}`).innerHTML = 
        `<img class='github-fork-img' src='../static/images/fork.png'/ alt='fork'> `+data.forks
    }