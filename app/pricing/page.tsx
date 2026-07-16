import type {Metadata} from "next";
import {PricingClient} from "./PricingClient";

export const metadata:Metadata={
 title:"Pricing",
 description:"Fixed website, commerce, app and ongoing support packages from Forty Pixels.",
 robots:{index:false,follow:false}
};

export default function PricingPage(){return <PricingClient/>}

