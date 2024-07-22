// Dark Mode
const darkMode = document.getElementById('darkMode');
if (darkMode) {
    darkMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        console.log('Dark mode on');
    });
}

// Function to format the date and time
function formatDateTime(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
    return new Date(date).toLocaleDateString(undefined, options);
}

// Fetching from backEnd
function fetchPosts() {
    fetch('http://localhost:8080/api/posts')
        .then(response => response.json())
        .then(posts => {
            const postList = document.getElementById('post-list');
            postList.innerHTML = '';
            posts.forEach(post => {
                const postDiv = document.createElement('div');
                postDiv.classList.add('post');
                postDiv.innerHTML = `
                    <h3>${post.title}</h3>
                    <p>${post.content}</p>
                    <small>Posted on: ${formatDateTime(post.time)}</small>
                `;
                postList.appendChild(postDiv);
            });
            console.log('Posts fetched and displayed');
        })
        .catch(error => console.error('Error fetching posts:', error));
}

// Adding a new post
function addNewPost(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;

    const postData = {
        title: title,
        content: content,
        time: new Date().toISOString() // Add the current time
    };

    fetch('http://localhost:8080/api/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(response => {
            if (response.ok) {
                fetchPosts();  // Refresh the list of posts
                document.getElementById('post-form').reset();  // Clear the form
                console.log('New post added');
            } else {
                console.error('Error adding post:', response.statusText);
            }
        })
        .catch(error => console.error('Error adding post:', error));
}

// Fetch and display posts when the page loads
document.addEventListener('DOMContentLoaded', fetchPosts);

// Attach event listener to the form submit event
const postForm = document.getElementById('post-form');
if (postForm) {
    postForm.addEventListener('submit', addNewPost);
}
