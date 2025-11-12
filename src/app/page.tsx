import BasicCounter from "@/components/BasicCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Nextjs Starter Frontend",
	description: "Production grade Next.js starter template",
};

const page = () => {
	return (
		<section className="grid h-[90dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Basic Counter App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<BasicCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
