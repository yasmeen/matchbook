import { Link } from "@nextui-org/react";
import Header from "@/components/Header";
import { darkTheme } from "@/styles/stitches";
import useSWR from "swr";
import Show from "@/components/Show";

export default function Shows() {
	// const { data, error } = useSWR("/api/shows", fetcher);

	// if (error) return <div>failed to load</div>;
	// if (!data) return <div>loading...</div>;

	return (
		<div className={darkTheme}>
			<Header></Header>
			<Show></Show>
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
