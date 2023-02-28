import { Image, Navbar, Link, Spacer, Button } from "@nextui-org/react";
import { stitches, darkTheme } from "@/styles/stitches";
import { auth, signInWithGoogle } from "../firebase";
export default function Header() {
	// Login handler
	const loginHandler = (result) => {
		alert(
			`Logged in as @${result.username}! Address: ${result.address.address}`
		);
	};

	return (
		<div>
			<Navbar isBordered variant="floating">
				<Navbar.Brand>
					<Link href="/">
						<Image
							height={65}
							src="/matchbook-alternate.png"
							alt="Matchbook"
						/>
					</Link>
				</Navbar.Brand>
				<Navbar.Content hideIn="xs">
					<Navbar.Link href="/shows">Shows</Navbar.Link>
					<Navbar.Link href="/learn">Learn</Navbar.Link>
				</Navbar.Content>
				<Navbar.Content>
					<Navbar.Item>
						<Button
							flat
							style={{
								backgroundColor: stitches.theme.colors.amaranth,
								color: "white",
							}}
							auto
							onClick={signInWithGoogle}
						>
							Log In
						</Button>
					</Navbar.Item>
				</Navbar.Content>
			</Navbar>
			<Spacer y={2} />
		</div>
	);
}
