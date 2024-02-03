import { MagnifyingGlass } from 'react-loader-spinner';
const Loader = () => {
  return (
    <MagnifyingGlass
      visible={true}
      height="100"
      width="100"
      ariaLabel="magnifying-glass-loading"
      wrapperStyle={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: '0 auto',
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '9999',
      }}
      wrapperClass="magnifying-glass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  );
};

export default Loader;
