import Header from "@/components/Header";
import { Layout } from "@/components/Layout";
import { Text, Container } from "@nextui-org/react";

export default function Learn() {
	return (
		<div>
			<Header></Header>
			<Container justify="center">
				<Text h3 size={25} justify="center" weight="bold">
					What is Matchbook?
				</Text>
				<Text size={20} justify="center">
					Matchbook is a social betting platform that allows you to
					bet on the outcomes of your favorite reality dating shows.
				</Text>
				<Text
					h3
					size={25}
					justify="center"
					weight="bold"
					style={{ marginTop: "20px" }}
				>
					How does it work?
				</Text>
				<Text size={20} justify="center">
					Pick your favorite show and bet on the outcomes of upcoming
					episodes. If you win, you&apos;ll earn points that you can
					use to bet on future episodes. If you lose, you&apos;ll lose
					points. The more points you have, the more you can bet. For
					each correct bet, you can earn an NFT badge.
				</Text>
				<Text
					h3
					size={25}
					justify="center"
					weight="bold"
					style={{ marginTop: "20px" }}
				>
					Where are my badges?
				</Text>
				<Text size={20} justify="center">
					You can view your badges in your profile. They are linked to
					your Comet account. If you don&apos;t have a Comet account,
					you can create one here. If you already have a Comet
					account, you can log in with it.
				</Text>
			</Container>
		</div>
	);
}
