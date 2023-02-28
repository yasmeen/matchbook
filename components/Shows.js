import React, { useState, useEffect } from "react";
import { Container, Grid, Text, Row, Col, Spacer } from "@nextui-org/react";
import CustomCard from "@/components/CustomCard";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Shows() {
	const [shows, setShows] = React.useState([]);
	useEffect(() => {
		const query = collection(db, "shows");
		getDocs(query).then((querySnapshot) => {
			const data = [];
			querySnapshot.forEach((doc) => {
				data.push({ id: doc.id, ...doc.data() });
			});
			setShows(data);
		});
	}, []);

	// db.collection("shows")
	// 	.get()
	// 	.then((querySnapshot) => {
	// 		querySnapshot.forEach((doc) => {
	// 			// doc.data() is never undefined for query doc snapshots
	// 			console.log(doc.id, " => ", doc.data());
	// 		});
	// 	});

	// const showsCol = collection(db, "shows");
	// const snapshot = await getDocs(showsCol);
	// const showsList = snapshot.docs.map((doc) => doc.data());
	// console.log(showsList);

	// const shows = [
	// 	{
	// 		id: 1,
	// 		name: "The Bachelor",
	// 		slug: "the-bachelor",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Love is Blind",
	// 		slug: "love-is-blind",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "The Ultimatum",
	// 		slug: "the-ultimatum",
	// 	},
	// ];

	return (
		<Container justify="center">
			<Text
				h1
				size={25}
				weight="bold"
				justify="center"
				style={{ marginLeft: "60px" }}
			>
				Bet on the outcomes of your favorite reality dating shows.
			</Text>
			<Spacer y={2} />
			<Grid.Container gap={2} justify="center">
				<Grid xs={12} sm={12}>
					<Row gap={2}>
						{shows.map((show) => (
							<Col key={show.id}>
								<CustomCard name={show.name} slug={show.slug} />
							</Col>
						))}
					</Row>
				</Grid>
				<Spacer y={1} />
				<Grid xs={12} sm={12}>
					<Row gap={2}>
						<Col>
							<CustomCard
								name={"Temptation Island"}
								slug="temptation-island"
							/>
						</Col>
						<Col>
							<CustomCard
								name={"The Bachelorette"}
								slug="the-bachelorette"
							/>
						</Col>
						<Col>
							<CustomCard
								name={"90 Day Fiancé"}
								slug="90-day-fiance"
							/>
						</Col>
					</Row>
				</Grid>
				{/* <Grid xs={12} sm={4}>
					<Card2 />
				</Grid>
				<Grid xs={12} sm={4}>
					<Card3 />
				</Grid>
				<Grid xs={12} sm={5}>
					<Card4 />
				</Grid>
				<Grid xs={12} sm={7}>
					<Card5 />
				</Grid> */}
			</Grid.Container>
		</Container>
	);
}
