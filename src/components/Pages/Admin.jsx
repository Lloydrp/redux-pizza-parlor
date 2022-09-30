import { useState } from "react";
import { useSelector } from "react-redux";
import AdminDetails from "../AdminDetails/AdminDetails";
import Header from "../Header/Header";

function Admin() {
  const adminList = useSelector((store) => store.admin);
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <Header total={false} />
      <h2>AdminList Below:</h2>
      <div>
        {adminList.map((item) => (
          <li key={item.id} onClick={() => setClicked(!clicked)}>
            {item.customer_name} {item.time} {item.type} {item.total}
            {clicked && <AdminDetails item={item} />}
          </li>
        ))}
      </div>
    </>
  );
}

export default Admin;
