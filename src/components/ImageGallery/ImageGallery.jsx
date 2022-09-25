import { ImgGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { nanoid } from 'nanoid';
export const ImgGallery = ({ data, onClick }) => {
  // console.log(data);
  return (
    <ul>
      {data.map(img => {
        // console.log(img);
        return (
          <ImgGalleryItem
            img={img.webformatURL}
            alt={img.type}
            key={nanoid(4)}
            onClick={onClick}
          />
        );
      })}{' '}
    </ul>
  );
};
