import Sidebar from "./components/navigation/Sidebar";
import Home from "./components/Home";

function App() {
  const menu = [
    {
      id: 1,
      title: "Dashboard",
    },
    {
      id: 2,
      title: "Students",
      submenu: true,
      submenuItems: [
        { id: 2.1, title: "Student List" },
        { id: 2.2, title: "Add Student" },
      ],
    },
    {
      id: 3,
      title: "Teachers",
      submenu: true,
      submenuItems: [
        { id: 3.1, title: "Teacher List" },
        { id: 3.2, title: "Add Teacher" },
      ],
    },
    {
      id: 4,
      title: "Classes",
      submenu: true,
      submenuItems: [
        { id: 4.1, title: "Classes List" },
        { id: 4.2, title: "Add Classes" },
      ],
    },
    {
      id: 5,
      title: "Coach",
      submenu: true,
      submenuItems: [
        { id: 5.1, title: "Coach List" },
        { id: 5.2, title: "Add Coach" },
      ],
    },
  ];
  return (
    <div className="flex flex-row bg-gray-800 ">
      <Sidebar menuList={menu} />
      <Home />
    </div>
  );
}

export default App;
