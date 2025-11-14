import MasterCounter from "@/components/AtomicCounter";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from "@/components/shadcnui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Atomic | Counter State App",
	description: "Atomic Counter State App",
};

const page = () => {
	return (
		<section className="grid h-[80dvh] place-items-center">
			<Card className="w-xs">
				<CardHeader>
					<CardTitle className="grid place-items-center text-2xl">
						Atomic Counter App
					</CardTitle>
				</CardHeader>
				<CardContent>
					<MasterCounter />
				</CardContent>
			</Card>
		</section>
	);
};

export default page;
