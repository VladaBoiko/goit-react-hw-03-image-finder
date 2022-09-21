import { Component } from 'react';
import { SearchBar } from './Searchbar/SearchBar';
import { ImgGallery } from './ImageGallery/ImageGallery';
import { GetImages } from 'API/Api';

export class App extends Component {
  state = {
    images: [],
    isLoading: false,
    error: false,
  };
  async componentDidMount() {
    const newImgService = new GetImages();
    try {
      this.setState({ isLoading: true });
      const images = await newImgService.getImages();
      this.setState({ images, isLoading: false });
      // console.log(this.state);
    } catch (error) {
      this.setState({ error: true, isLoading: false });
      console.log(error);
    }
  }

  render() {
    console.log(this.state);
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
        <SearchBar />
        <ImgGallery />
      </div>
    );
  }
}
