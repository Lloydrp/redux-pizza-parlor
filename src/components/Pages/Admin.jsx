import { useSelector } from "react-redux";
import Header from "../Header/Header";

function Admin() {
  const adminList = useSelector((store) => store.admin);
  return (
    <>
      <Header total={false} />
      <h2>AdminList Below:</h2>
      <div>
        {adminList.map(
          (item) => `${item.customer_name} ${item.time} ${item.type} ${item.total}`
        )}
      </div>
    </>
  );
}

export default Admin;
