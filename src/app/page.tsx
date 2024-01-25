import Dashboard from "@/components/Dashboard";
import SideBar from "@/components/Sidebar";

const Home = () => {
    return (
        <main className="flex flex-col lg:flex-row items-start justify-center lg:mt-5 w-full lg:max-w-[72rem] container mx-auto">
            <SideBar />
            <Dashboard />
        </main>
    );
};

export default Home;
