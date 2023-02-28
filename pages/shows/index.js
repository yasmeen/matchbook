import { Link } from "@nextui-org/react";
import Header from "@/components/Header";
import { darkTheme } from "@/styles/stitches";
import useSWR from "swr";
import Shows from "@/components/Shows";

export default function ShowPage() {
	// const { data, error } = useSWR("/api/shows", fetcher);

	// if (error) return <div>failed to load</div>;
	// if (!data) return <div>loading...</div>;

	return (
		<div className={darkTheme}>
			<Header></Header>
			<Shows></Shows>
			{/* <ul>
				{data.map((show) => (
					<li key={show.id}>
						<Link href="/shows/[id]" as={`/shows/${show.id}`}>
							<a>{show.name}</a>
						</Link>
					</li>
				))}
			</ul> */}
		</div>
	);
}
