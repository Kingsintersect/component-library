import Sidebar, { SidebarItem } from '@components/Sidebar';
import { UserCircleIcon, ServerIcon } from '@heroicons/react/24/outline';


export default function Layout({ children }: { children: React.ReactNode }) {

    return (
        <div className="flex h-screen flex-row overflow-hidden">
            <div className="">
                <Sidebar>
                    <SidebarItem icon={<UserCircleIcon width={24} />} text="Users" url={`dashboard/users`} active />
                    <SidebarItem icon={<UserCircleIcon width={24} />} text="Users" url={`dashboard/settings`} />
                    <SidebarItem icon={<ServerIcon width={24} />} text="Server" url={`dashboard/manage`} alert >
                        <SidebarItem icon={<UserCircleIcon width={24} />} text="Submenu" url={`dashboard/submenu`} />
                        <SidebarItem icon={<UserCircleIcon width={24} />} text="Submenu" url={`dashboard/submenu`} />
                        <SidebarItem icon={<UserCircleIcon width={24} />} text="Submenu" url={`dashboard/submenu`} />
                    </SidebarItem>
                    <SidebarItem icon={<UserCircleIcon width={24} />} text="Users" url={`dashboard/invoice`} />
                </Sidebar>
            </div>
            <div className="flex-grow md:overflow-y-auto">
                <div className="top-nav w-full">
                    <nav className="py-4 md:px-8 px-4 bg-white shadow-md">
                        <ul className='flex gap-4 items-center justify-center'>
                            <li>home</li>
                            <li>abroad</li>
                        </ul>
                    </nav>
                </div>
                <div className="p-6 md:p-12">
                    {children}
                </div>
            </div>
        </div>
    );
}