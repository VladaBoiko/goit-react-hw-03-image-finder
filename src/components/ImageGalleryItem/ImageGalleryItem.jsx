export const ImgGalleryItem = ({ img, alt }) => {
  // console.log(img);
  return (
    <li>
      <img src={img} alt={alt} />
    </li>
  );
};
