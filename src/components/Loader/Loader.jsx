import { MagnifyingGlass } from 'react-loader-spinner';
const Loader = () => {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
    >
      <MagnifyingGlass
        visible={true}
        height="100"
        width="100"
        ariaLabel="magnifying-glass-loading"
        wrapperStyle={{}}
        wrapperClass="magnifying-glass-wrapper"
        glassColor="#c0efff"
        color="#e15b64"
      />
    </div>
  );
};

export default Loader;
