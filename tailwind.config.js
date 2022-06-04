module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx}",
		"./src/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"home-image-desktop": "url('../../public/bg-home-desktop.jpg')",
				"home-image-mobile": "url('../../public/bg-home-mobile.jpg')",
			},
			colors: {
				"light-blue": "#DEECF5",
				gray: {
					100: "#D7D7D7A6",
					"200-transparent": "#B8B8B833",
					300: "#B7B7B7",
					500: "#959595",
					700: "#737373",
				},
				white: "#EEEEEE",
				"bg-gray-light-transparent": "#B8B8B84D",
				"bg-black": "#0E0F10",
				"accent-blue": {
					transparent: "#2679DA76",
					900: "#2679DA",
				},
				whatsapp: {
					transparent: "#0FB840B1",
					900: "#0FB840",
				},
			},
		},

		fontFamily: {
			poppins: ["'Poppins', 'Helvetica', sans-serif"],
		},

		screen: {
			sm: "540px",
			md: "738px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},
	},
	plugins: [],
};
