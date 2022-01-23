const posts = [
    {title: 'post 1', body: 'this is post 1'},
    {title: 'post 2', body: 'this is post 2'}
]

function get_posts(){
    setTimeout(() => {posts.forEach(post => {
        console.log(post.title);
    })
    },2000)
}

function create_post(post, callback){
    setTimeout(() => {
        posts.push(post);
        callback();
    }, 2000)
}

create_post({title: 'post 3', body: 'this is post 3'}, get_posts);
