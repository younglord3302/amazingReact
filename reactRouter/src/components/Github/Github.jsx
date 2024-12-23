import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://avatars.githubusercontent.com/u/118330880?v=4")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git Picture" />
    </div>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  const response = await fetch(
    "https://avatars.githubusercontent.com/u/118330880?v=4"
  );
  return response.json;
};
