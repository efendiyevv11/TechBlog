package techblog.service;

import techblog.model.Post;
import techblog.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    // Fetch all posts
    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    // Fetch a single post by ID
    public Optional<Post> getPostById(String id) {
        return postRepository.findById(id);
    }

    // Add a new post
    public Post addPost(Post post) {
        post.setTime(new Date());
        return postRepository.save(post);
    }

    // Delete a post by ID
    public void deletePost(String id) {
        postRepository.deleteById(id);
    }
}
