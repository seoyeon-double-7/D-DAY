import Nav from "../../Layout/Nav";
import Footer from "../../Layout/Footer";
import "../../styles/HomePage.css";
import { useEffect, useState } from "react";
import axios from "axios";
function RankPage() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  useEffect(() => {
    axios
      .post("api/users/footprint/read")
      .then((res) => setPosts(res.data))
      .catch((err) => console.log(err));
  }, []);

  console.log(posts.postData);

  return (
    <div className="home">
      <Nav />
    </div>
  );
}

export default RankPage;
