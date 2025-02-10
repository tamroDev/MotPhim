import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div>
      <h1>Trang chủ</h1>
      <Link to="/about">Đi tới About</Link>
    </div>
  );
};

export default HomePage;
