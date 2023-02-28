import Header from "@/components/Header";
import { darkTheme } from "@/styles/stitches";
import { Text } from "@nextui-org/react";
import { useRouter } from "next/router";

const Show = () => {
	const router = useRouter();
	const { showSlug } = router.query;

	// todo: fetch show data from API
	// make sure show is in database

	return (
		<div className={darkTheme}>
			<Header></Header>
			<Text h1 color="black" size={25} weight="bold">
				{showSlug}
			</Text>
		</div>
	);
};

export default Show;
