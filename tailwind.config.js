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
				"services-image": "url('../../public/services-image.svg')",
			},
			colors: {
				"light-blue": {
					100: "#DEECF5",
					400: "#BAE1F6",
				},
				gray: {
					100: "#D7D7D7A6",
					200: "#B8B8B8",
					"200-transparent": "#B8B8B833",
					300: "#B7B7B7",
					500: "#959595",
					700: "#737373",
				},
				white: "#EEEEEE",
				black: "#0E0F10",
				"bg-gray-light-transparent": "#B8B8B84D",
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
