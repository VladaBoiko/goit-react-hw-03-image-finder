import { ColorRing } from 'react-loader-spinner';
import { Component } from 'react';
import { SearchBar } from './Searchbar/SearchBar';
import { ImgGallery } from './ImageGallery/ImageGallery';
import { getImages } from 'API/Api';
import { LoadMore } from './LoadMore/LoadMore';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
    page: 1,
    query: '',
  };
  updateQuery = value => {
    this.setState({
      query: value.query,
      page: 1,
      images: [],
    });
  };
  getData = async () => {
    try {
      this.setState({ isLoading: true });
      const images = await getImages(this.state.page, this.state.query);
      // this.setState({ images, isLoading: false });
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        isLoading: false,
      }));
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  };
  async componentDidUpdate(_, prevState) {
    const prevRequest = prevState.request;
    const nextRequest = this.state.request;
    const prevPage = prevState.page;
    const nextPage = this.state.page;

    if (prevRequest !== nextRequest) {
      this.state.images = [];
      this.state.page = 1;
      this.getData();
    }

    if (prevPage !== nextPage) {
      this.getData();
    }
  }
  loadMore = async () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
    // try {
    //   this.setState({ isLoading: true });
    //   const images = await getImages(this.state.page, this.state.query);
    //   this.setState(prevState => ({
    //     images: [...prevState.images, ...images],
    //     isLoading: false,
    //   }));
    // } catch (error) {
    //   this.setState({ error: true, isLoading: false });
    //   console.log(error);
    // }
  };
  render() {
    const { images, isLoading } = this.state;
    return (
      <div
        style={{
          width: '1240px',
          padding: '0 20px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <SearchBar updateQuery={this.updateQuery} getData={this.getData} />
        {!isLoading && images.length > 0 ? (
          <>
            <ImgGallery data={images} />
          </>
        ) : (
          'zopa'
        )}
        <LoadMore click={this.loadMore} />
        {isLoading && (
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        )}
      </div>
    );
  }
}
