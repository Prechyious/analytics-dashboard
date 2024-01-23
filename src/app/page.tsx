import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/Sidebar";

const Home = () => {
    return (
        <main className="container mx-auto w-full flex mt-10">
            <SideBar />
            <Dashboard />
        </main>
    );
};

export default Home;
