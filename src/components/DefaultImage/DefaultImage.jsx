function DefaultImage({ className, src, alt, long }) {
  return (
    <img
      className={className}
      src={
        src ?? (long ? '/img/defaultLongImage.jpg' : '/img/defaultImage.jpg')
      }
      alt={alt}
    />
  );
}

DefaultImage.defaultProps = {
  long: false,
};

export default DefaultImage;
