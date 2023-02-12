import Header from "@/components/Header";
import { Layout } from "@/components/Layout";
import { stitches, darkTheme } from "@/styles/stitches";
import { Container } from "react-bootstrap";
import { Text, Card, Spacer, Row, Col } from "@nextui-org/react";
import { CometButton } from "@comet-labs/react";

export default function Home() {
	return (
		<div>
			<Header></Header>
			<Container style={{ marginLeft: "30px", marginRight: "30px" }}>
				<Row gap={1}>
					<Col>
						<Text
							h1
							size={30}
							color={stitches.theme.colors.auburn}
							css={{ m: 0 }}
							style={{ paddingLeft: "30px" }}
						>
							Predict the outcome of your favorite reality dating
							shows.
						</Text>
						<Spacer y={1} />
						<Text
							h1
							size={18}
							color={stitches.theme.colors.amaranth}
							css={{ m: 0 }}
							style={{ paddingLeft: "30px" }}
						>
							Get real-time insights and make informed predictions
							on the future of your favorite dating shows with
							Matchbook.
						</Text>
						<Spacer y={4} />
						<CometButton
							action="mint"
							collectionId="23d13a1960f3" // The Reality Rose Collection
						></CometButton>
					</Col>
					<Col>
						<Card css={{ $$cardColor: "$colors$white" }}>
							<Card.Body>
								<Card.Header>
									<Text
										h6
										size={25}
										color={stitches.theme.colors.amaranth}
										css={{ m: 0 }}
										style={{ paddingLeft: "30px" }}
									>
										Featured Show
									</Text>
								</Card.Header>
								<Card.Image
									src="/the-bachelor-logo.png"
									objectFit="cover"
									// width="100%"
									height={340}
									alt="Card image background"
								/>
								<Text
									h6
									size={25}
									color={stitches.theme.colors.amaranth}
									css={{ m: 0 }}
									style={{ paddingLeft: "30px" }}
								>
									12 predictions available to bet on
								</Text>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</Container>
		</div>
	);
}
