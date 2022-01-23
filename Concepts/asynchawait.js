const posts = [
    {title: 'post 1', body: 'this is post 1'},
    {title: 'post 2', body: 'this is post 2'}
]

function get_posts(){
    setTimeout(() => {posts.forEach(post => {
        console.log(post.title);
    })
    },1000)
}

function create_post(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            const error = false;
            if(!error){
                resolve();
            }else{
                reject("Error! Something went wrong")
            }
        }, 2000)
    })
}

async function init(){
    await create_post({title: 'post 3', body: 'this is post 3'})

    get_posts();
}

init();