import React, { useEffect, useState } from 'react';

import './styles.css';
import { Posts } from '../../components/Posts';

import { loadPosts } from '../../utils/loadPosts';
import { Button } from '../../components/Button';
import { SearchInput } from '../../components/SearchInput';

export const Home = () => {
  const [posts, setPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [postsPerPage] = useState(5);
  const [searchValue, setSearchValue] = useState('');

  const handleLoadPosts = async () => {
    const postsAndPhotos = await loadPosts();

    setPosts(postsAndPhotos.slice(page, postsPerPage));
    setAllPosts(postsAndPhotos);
  };

  useEffect(() => {
    handleLoadPosts();
  }, []);

  const loadMorePosts = () => {
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);

    setPosts(posts);
    setPage(nextPage);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value);
  };

  // const { posts, page, postsPerPage, allPosts, searchValue } = this.state
  const noMorePosts = page + postsPerPage >= allPosts.length;

  const filteredPosts = searchValue
    ? allPosts.filter((post) => post.title.toLowerCase().includes(searchValue.toLowerCase()))
    : posts;

  return (
    <section className="container">
      <div className="search-container">
        {!!searchValue && <h1>Search value: {searchValue}</h1>}
        <SearchInput searchValue={searchValue} handleChange={handleChange} />
      </div>
      {filteredPosts.length ? <Posts posts={filteredPosts} /> : <p>Não há postagens nessa busca =(</p>}
      <div className="btn-container">
        {!searchValue && <Button text="Load more posts" disabled={noMorePosts} loadPosts={loadMorePosts} />}
      </div>
    </section>
  );
};

// export class Home2 extends Component {
//     state = {
//         posts: [],
//         allPosts: [],
//         page: 0,
//         postsPerPage: 3,
//         searchValue: '',
//     };

//     async componentDidMount() {
//         await this.loadPosts()
//     };

//     loadPosts = async() => {
//         const { page, postsPerPage} = this.state;

//         const postsAndPhotos = await loadPosts();
//         this.setState({
//             posts: postsAndPhotos.slice(page, postsPerPage),
//             allPosts: postsAndPhotos,
//          });
//     }

//     loadMorePosts = () => {
//         const {
//             page,
//             postsPerPage,
//             allPosts,
//             posts
//         } = this.state
//         const nextPage = page + postsPerPage;
//         const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
//         posts.push(...nextPosts);

//         this.setState({ posts, page: nextPage })
//     }

//     handleChange = (e) => {
//         const { value } = e.target;
//         this.setState({ searchValue: value})
//     }

//     render() {
//         const { posts, page, postsPerPage, allPosts, searchValue } = this.state
//         const noMorePosts = page + postsPerPage >= allPosts.length;

//         const filteredPosts = searchValue ?
//         allPosts.filter(post => {
//             return post.title.toLowerCase().includes(searchValue.toLowerCase());
//         })
//         :
//         posts;

//         return (
//             <section className="container">
//                 <div className="search-container">
//                     {!!searchValue && <h1>Search value: {searchValue}</h1>}
//                     <SearchInput searchValue={searchValue} handleChange={this.handleChange} />
//                 </div>
//                 {filteredPosts.length ? <Posts posts={filteredPosts}/> : <p>Não há postagens nessa busca =(</p>}
//                 <div className="btn-container">
//                     {!searchValue && (
//                         <Button text="Load more posts" disabled={noMorePosts} loadPosts={this.loadMorePosts}/>
//                     )}
//                 </div>
//             </section>
//         )
//     }
// }

export default Home;
