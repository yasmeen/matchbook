import { createStitches } from "@stitches/react";

const stitches = createStitches({
	theme: {
		colors: {
			// lavenderPink: "#FABBDFff",
			// persianPink: "#F496D3ff",
			// thulianPink: "#D769A3ff",
			// mountbattenPink: "#9C839Eff",
			// indianRed: "#E16262ff",

			// blush: "#D5658Bff",
			// jet: "#2B2928ff",
			// hookersGreen: "#537457ff",
			// mossGreen: "#788B56ff",
			// amaranth: "#CE3E53ff",

			vanDyke: "#402B30ff", // dark brown
			ebony: "#4E5042ff", // super dark green
			dun: "#E2CDB6ff", // beige
			lion: "#B98759ff", // tan
			mossGreen: "#788B56ff", // medium green
			sage: "#B9BF93ff", // light green
			auburn: "#A0372Cff", // dark red
			amaranth: "#CE3E53ff", // dark pink/light red
			blush: "#D5658Bff", // light pink
			hunterGreen: "#3D5038ff", // dark green
		},
	},
});

const darkTheme = stitches.createTheme({
	type: "dark",
	colors: {
		primaryLight: "$blush",
		primaryLightHover: "$amaranth",
		primaryLightActive: "$amaranth",
		primaryLightContrast: "$auburn",
		primaryBorder: "$amaranth",
		primaryBorderHover: "$amaranth",
		primarySolidHover: "$amaranth",
		primarySolidContrast: "$white",
		primaryShadow: "$amaranth",
		gradient:
			"linear-gradient(112deg, $blush -25%, $amaranth -10%, $hunterGreen 80%)",
		link: "$amaranth",
		background: "$vanDyke",
		secondaryLight: "$sage",
		secondaryLightHover: "$mossGreen",
		secondaryLightActive: "$mossGreen",
		secondaryLightContrast: "$hunterGreen",
		secondaryBorder: "$mossGreen",
		secondaryBorderHover: "$mossGreen",
		secondarySolidHover: "$mossGreen",
		secondarySolidContrast: "$white",
		secondaryShadow: "$mossGreen",
		secondaryGradient:
			"linear-gradient(112deg, $sage -25%, $mossGreen -10%, $hunterGreen 80%)",
		secondaryLink: "$mossGreen",
		text: "$white",
	},
});

const lightTheme = stitches.createTheme({
	type: "light",
	colors: {
		background: "#F7F7F7",
		text: "$black",
	},
});

export { stitches, darkTheme, lightTheme };
