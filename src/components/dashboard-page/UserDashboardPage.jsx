import React from "react";
import Table from "../table/Table";

function UserDashboardPage() {
  const [data, setData] = React.useState([]);
  const api = "https://65790f5ef08799dc80464bf0.mockapi.io/api/v1/users";
  React.useEffect(() => {
    fetch(api)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  const columns = [
    { key: "username", label: "User Name" },
    { key: "email", label: "Email" },
    { key: "fullName", label: "fullName" },
    {
      key: "avatar",
      label: "avatar",
      render: (value) => {
        return (
          <img
            src={value}
            alt="avatar"
            style={{ width: "50px", height: "50px" }}
            className="rounded-full border border-blueGray-50 shadow-lg"
          />
        );
      },
    },
    {
      key: "delete",
      label: "Delete",
      render: () => (
        <button
          onClick={() => handleDelete(this.id)}
          className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700"
        >
          Delete
        </button>
      ),
    },
  ];
  const addBtn = () => {
    return (
      <button className="btn rounded bg-slate-700 px-4 py-2 text-white transition-all hover:bg-slate-400 hover:text-black active:bg-slate-700">
        Add User
      </button>
    );
  };

  const handleDelete = (id) => {
    fetch(`${api}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        const newData = data.filter((item) => item.id !== id);
        setData(newData);
      });
  };
  return (
    <>
      <div className="">
        <Table
          columns={columns}
          data={data}
          title={"Users"}
          subTitle={addBtn()}
        />
      </div>
    </>
  );
}

export default UserDashboardPage;
