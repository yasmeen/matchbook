import { Container, Grid, Text, Row, Col, Spacer } from "@nextui-org/react";
import CustomCard from "@/components/CustomCard";
export default function Show() {
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
						<Col>
							<CustomCard showName={"The Bachelor"} />
						</Col>
						<Col>
							<CustomCard showName={"Love Is Blind"} />
						</Col>
						<Col>
							<CustomCard showName={"The Ultimatum"} />
						</Col>
					</Row>
				</Grid>
				<Spacer y={1} />
				<Grid xs={12} sm={12}>
					<Row gap={2}>
						<Col>
							<CustomCard showName={"Temptation Island"} />
						</Col>
						<Col>
							<CustomCard showName={"The Bachelorette"} />
						</Col>
						<Col>
							<CustomCard showName={"90 Day Fiancé"} />
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
