import Button from "@/app/components/buttons/Button";
import NavBar from "@/app/components/NavBar";
import { accordionItems, menuItems } from "@/app/lib/constants";
import { TvIcon, UserCircleIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { FC } from "react";
import Accordion, { AccordionProvider } from "@/app/components/accordions/Accordion";
import { AppleSignInButtons, FacebookSignInButton, GithubSignInButtons, GoogleSignInButtons, TwitterSignInButtons } from "@/app/components/buttons/SocialButtons";
import { MetaMaskPaymentButtons, OpraPayPaymentButtons, BitCoinPaymentButtons, PaypalPaymentButtons, ApplePayPaymentButtons, AmericanExpressPaymentButtons, VisaPaymentButtons, MasterCardPaymentButtons, EthereumPaymentButtons } from "@/app/components/buttons/PaymentButtons";
import BreadCrump from "./components/breadcrump/BreadCrump";
import { MobileMockup, TabletMockup } from "./components/devicemockup/MobileMockup";
import Navbar from "./components/headers/NavigationBar";

const Home: FC = () => {
    const isLoading = true;
    return (
        <>
            <Navbar />
            <main className="flex space-y-5 min-h-screen flex-col items-center justify-between p-24">
                <h1 className="shining-golden bg-red-600 px-5">Component Libraries...</h1>
                <div className="flex items-center justify-center w-full">
                    <BreadCrump />
                </div>
                <div className="flex items-center justify-center w-full">
                    <MobileMockup device="mobile" />
                    <MobileMockup device="iphone12" />
                </div>
                <div className="flex items-center justify-center w-full">
                    <TabletMockup />
                </div>
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
                <div className="flex items-center flex-wrap gap-4">
                    <FacebookSignInButton>Button Loading</FacebookSignInButton>
                    <TwitterSignInButtons>Button Loading</TwitterSignInButtons>
                    <GithubSignInButtons>Button Loading</GithubSignInButtons>
                    <GoogleSignInButtons>Button Loading</GoogleSignInButtons>
                    <AppleSignInButtons>Button Loading</AppleSignInButtons>
                    <br />

                </div>
                <div className="flex items-center flex-wrap gap-4">
                    <MetaMaskPaymentButtons>Button Loading</MetaMaskPaymentButtons>
                    <OpraPayPaymentButtons>Button Loading</OpraPayPaymentButtons>
                    <BitCoinPaymentButtons>Button Loading</BitCoinPaymentButtons>
                    <PaypalPaymentButtons>Button Loading</PaypalPaymentButtons>
                    <ApplePayPaymentButtons>Button Loading</ApplePayPaymentButtons>
                    <AmericanExpressPaymentButtons>Button Loading</AmericanExpressPaymentButtons>
                    <VisaPaymentButtons>Button Loading</VisaPaymentButtons>
                    <MasterCardPaymentButtons>Button Loading</MasterCardPaymentButtons>
                    <EthereumPaymentButtons>Button Loading</EthereumPaymentButtons>
                    <br />

                </div>
                <div className="flex items-center gap-4">
                    <Button variant={"secondary"} isLoading={true}>Button Loading</Button>
                    <Button variant={"primaryIconButtonOutline"} size={"xs"} className="rounded-lg"><HandThumbUpIcon width={30} /></Button>
                    <Button variant={"success"} disabled>Button disabled</Button>
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