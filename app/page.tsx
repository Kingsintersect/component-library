import Button from "@/app/components/Button";
import NavBar from "./components/NavBar";
import { menuItems } from "./lib/constants";
import { UserCircleIcon } from "@heroicons/react/24/outline";

export default function Home() {
  const isLoading = true;
  return (
    <>
      <NavBar brandName="LOGO" imageSrcPath={"/public/"} menuItems={menuItems} />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1>Component Libraries...</h1>
        <div className="flex items-center gap-4">
          <Button>Button</Button>
          <Button className="text-blue-700 border border-blue-700 hover:scale-105">Button</Button>
          <Button variant={"secondary"}>Button</Button>
          <Button variant={"danger"}>Button</Button>
          <Button variant={"primary"} size={"lg"} isLoading>Button</Button>
          <Button variant={"primary"} size={"lg"} font={"bold"} icon={<UserCircleIcon width={"20px"} />}>Button</Button>
          <Button variant={"primary"} size={"lg"} font={"bold"} iconPosition={"left"} icon={<UserCircleIcon width={"20px"} />}>Button</Button>
          <br />

        </div>

        <Button variant={"primary"} size={"full"} font={"bold"} iconPosition={"left"} icon={<UserCircleIcon width={"20px"} />}>Button</Button>
      </main>
    </>
  );
}
