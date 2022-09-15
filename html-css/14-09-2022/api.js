function load() {
    console.log("BODY LOADED");

    getPost()
}

function getPost() {
    axios.get("https://jsonplaceholder.typicode.com/posts")
        .then(data => {
            console.log(data);

            const allPostData = data.data;
            allPostData.forEach(post => {
                document.getElementById("allpost").innerHTML += `
                    <div class="post mb-5">
                        <div class="row">
                            <div class="col-lg-2">
                                <img src="https://via.placeholder.com/150/92c952" alt="img" width="120px" style="border-radius: 10px;">
                            </div>
                            <div class="col-lg-10">
                                <p> User #${post.userId} </p>
                                <p> ID #${post.id} </p>
                                <p> 
                                    <button class="btn btn-primary"> View </button>
                                </p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 text-primary">
                                <h4> ${post.title} </h4>
                            </div>
                            <div class="col-lg-12 ml-5 text-dark">
                                ${post.body}
                            </div>
                        </div>
                    </div>
                `
            });
        })
        .catch(err => {
            console.log(err);
        })
}


async function name1() {
    const data = await axios.get("https://jsonplaceholder.typicode.com/posts")
    .then(data123 => {
      console.log(data123);
    })
    console.log("data", data);
}
name1()