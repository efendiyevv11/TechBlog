package techblog.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import techblog.model.Post;

@Repository
public interface PostRepository extends MongoRepository<Post, String> {
}
