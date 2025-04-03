import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      {text: 'Post 1'},
      {text: 'Post 2'},
      {text: 'Post 3'},
      {text: 'Post 4'},
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      expect(postsService.findMany()).toMatchObject(posts);
    });

    it('should return correct posts for skip and limit options', () => {
      expect(postsService.findMany({skip: 2, limit: 1})).toMatchObject([{id: '3', text: 'Post 3'}]);
    });

    // реализуйте недостающие тест-кейсы
  });
});