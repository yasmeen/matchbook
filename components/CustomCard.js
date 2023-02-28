import { Card, Col, Text } from "@nextui-org/react";
import Link from "next/link";

export default function CustomCard({ name, slug }) {
	const link = "/shows/" + slug;
	return (
		<Link href={link}>
			<Card
				isPressable
				isHoverable
				variant="bordered"
				css={{ mw: "100%" }}
			>
				<Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
					<Col>
						<Text
							size={12}
							weight="bold"
							transform="uppercase"
							color="#ffffffAA"
						>
							Predictions
						</Text>
						<Text h2 color="white" size={25} weight="bold">
							{name}
						</Text>
					</Col>
				</Card.Header>
				<Card.Image
					src="gradient-1.png"
					objectFit="cover"
					width="100%"
					height={250}
					alt="Card image background"
				/>
			</Card>
		</Link>
	);
}
