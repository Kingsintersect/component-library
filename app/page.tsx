import Button from "@/app/components/Button";
import NavBar from "./components/NavBar";
import { accordionItems, menuItems } from "./lib/constants";
import { UserCircleIcon } from "@heroicons/react/24/outline";
import { FC } from "react";
import Accordion, { AccordionProvider } from "./components/accordions/Accordion";

const Home: FC = () => {
  const isLoading = true;
  return (
    <>
      <NavBar brandName="LOGO" imageSrcPath={"/public/"} menuItems={menuItems} />
      <main className="flex space-y-5 min-h-screen flex-col items-center justify-between p-24">
        <h1>Component Libraries...</h1>
        <div className="flex items-center justify-center w-full">
          <div className="w-2/3 mx-auto">
            <AccordionProvider>
              <div className="p-4">
                <h1 className="text-2xl font-bold mb-4">Accordion Example</h1>
                <Accordion items={accordionItems} />
              </div>
            </AccordionProvider>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={"secondary"} isLoading={true}>Button</Button>
          <Button variant={"success"}>Button</Button>
          <Button variant={"info"}>Button</Button>
          <Button variant={"warning"}>Button</Button>
          <Button variant={"danger"}>Button</Button>
          <Button variant={"primary"} size={"lg"} isLoading>Button</Button>
          <br />

        </div>
        <div className="flex items-center gap-4">
          <Button variant={"secondaryGradiant"}>Button</Button>
          <Button variant={"successGradiant"}>Button</Button>
          <Button variant={"infoGradiant"}>Button</Button>
          <Button variant={"warningGradiant"}>Button</Button>
          <Button variant={"dangerGradiant"}>Button</Button>
          <Button variant={"primaryGradiant"} size={"lg"} isLoading>Button</Button>
          <br />

        </div>
        <div className="flex items-center gap-4">
          <Button variant={"secondaryOutline"}>Button</Button>
          <Button variant={"successOutline"}>Button</Button>
          <Button variant={"infoOutline"}>Button</Button>
          <Button variant={"warningOutline"}>Button</Button>
          <Button variant={"dangerOutline"}>Button</Button>
          <Button variant={"primaryOutline"} size={"lg"} isLoading>Button</Button>
          <br />

        </div>

        <Button variant={"primary"} size={"full"} font={"bold"} iconPosition={"left"} icon={<UserCircleIcon width={"20px"} />}>Button</Button>
      </main>
    </>
  );
}

export default Home