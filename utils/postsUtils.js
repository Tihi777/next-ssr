export async function getAllPostsSlugs() {
  const res = await fetch('https://606154b6ac47190017a70b28.mockapi.io/api/v1/posts');
  const posts = await res.json();

  return posts.map(({ id }) => ({
    params: {
      slug: id,
    }
  }))
}

export async function getPostData(slug) {
  const res = await fetch(`https://606154b6ac47190017a70b28.mockapi.io/api/v1/posts/${slug}`);
  return await res.json();
}