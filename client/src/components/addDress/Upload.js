import { useState } from "react";
import dressesApi from "../../api/api";
function Upload() {
  const [pic, setPic] = useState();
  const handlePic = (e) => {
    const file = e.target.filles[0];
    setPic(file);
  };
  const handleUp = async () => {
    const data = new FormData();
    data.append("picture", pic);
    await dressesApi.post("/dresses/upload");
  };
  return (
    <ul>
      <input type="file" onChange={(e) => handlePic()}></input>
      <button onClick={handleUp()}>upload</button>
    </ul>
  );
}
export default Upload;
