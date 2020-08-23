fetch('https://api.github.com/users/raissonsouto/repos')
    .then(res => res.json())
    .then(data => data.forEach(project => createGithubContentBox(project)))

    function createGithubContentBox(data) {
        document.getElementById('repos').innerHTML += `
            <div class='github-repo'>
                <div class='github-title'><a href='${data.clone_url}'>${data.name}</a></div>
                <div class='github-description' id='github-description-${data.name}'></div>
                <div class='github-info'>
                    <div class='github-ball'></div>
                    <div class='github-language'>${data.language}</div>
                    <div class='github-star' id='github-star-${data.stargazers_count}'></div>
                    <div class='github-fork' id='github-fork-${data.forks}'></div>
                </div>
            </div>
        `
        if(data.description != null) document.getElementById(`github-description-${data.name}`).innerHTML = data.description.substring(0, 75)

        console.log(data)

        if(data.stargazers_count != null) document.getElementById(`github-star-${data.stargazers_count}`).innerHTML = `<img class='github-fork-img' src='../static/images/star.png'/ alt='star'> `+data.stargazers_count
        
        if(data.forks != null) document.getElementById(`github-fork-${data.forks}`).innerHTML = 
        `<img class='github-fork-img' src='../static/images/fork.png'/ alt='fork'> `+data.forks
    }