import Accordion, { AccordionProvider } from "@components/accordions/Accordion";
import BreadCrump from "@components/breadcrump/BreadCrump";
import Button from "@components/buttons/Button";
import { MetaMaskPaymentButtons, OpraPayPaymentButtons, BitCoinPaymentButtons, PaypalPaymentButtons, ApplePayPaymentButtons, AmericanExpressPaymentButtons, VisaPaymentButtons, MasterCardPaymentButtons, EthereumPaymentButtons } from "@components/buttons/PaymentButtons";
import { FacebookSignInButton, TwitterSignInButtons, GithubSignInButtons, GoogleSignInButtons, AppleSignInButtons } from "@components/buttons/SocialButtons";
import { MobileMockup, TabletMockup } from "@components/devicemockup/MobileMockup";
import { UserCircleIcon, HandThumbUpIcon } from "@heroicons/react/24/solid";
import { accordionItems } from "@lib/constants";
import { FC } from "react";
import { Section } from "@components/ui/Section";
import NewsLetterSubscription from "@components/ui/NewsLetterSubscription";
import MenuIcon from "@components/menuicon/MenuIcon";
import DropDown from "@components/dropdown/DropDown";



const Home: FC = () => {
    const isLoading = true;
    return (
        <>
            <Section className="text-white h-[100vh] bg-cover bg-fixed" title="First Section" highlight="title description" style={{ backgroundColor: "red", backgroundImage: `url("/pictures/nature-3.jpg")` }}>
                <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">Content Served</div>
                <MenuIcon bgColor="white" />
                <DropDown />
            </Section>
            <Section className="text-white h-[100vh] bg-cover bg-fixed" title="First Section" highlight="title description" style={{ backgroundColor: "red", backgroundImage: `url("/pictures/nature-5.jpg")` }}>
                <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">Content Served</div>
            </Section>

            <NewsLetterSubscription className="bg-blue-300 text-blue-900" highlitColor="text-green-500" title={"Get our daily update"} highlight="right into inbox..." />

            <main className="flex space-y-5 min-h-screen flex-col items-center justify-between">
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