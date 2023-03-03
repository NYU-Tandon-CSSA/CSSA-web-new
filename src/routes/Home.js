import img from '../images/bridge.png'

function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100 %',
        height: '100vh',
        zIndex: '-1',
      }}>
    </div>
  );
}

export default Home;