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
				"services-image": "url('../../public/services-image.jpg')",
				"contacts-desktop": "url('../../public/bg-contacts-desktop.svg')",
				"contacts-mobile": "url('../../public/bg-contacts-mobile.svg')",
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

		gridTemplateRows: {
			1: "repeat(1, minmax(0, 1fr))",
			2: "repeat(2, minmax(0, 1fr))",
			3: "140px 2fr 200px",
			4: "repeat(4, minmax(0, 1fr))",
			5: "repeat(5, minmax(0, 1fr))",
			6: "repeat(6, minmax(0, 1fr))",
			none: "none",
		},

		animation: {
			none: "none",
			pulse: "pulse 1s linear infinite",
			bounce: "bounce 1s infinite",
		},

		keyframes: {
			pulse: {
				"0%": {
					"box-shadow": "0 0 0 0px #0E49CFB3",
					transform: "scale(1)",
				},
				"50%": {
					"box-shadow": "0 0 0 15px #0E49CF4D",
					transform: "scale(1)",
				},
				"100%": {
					"box-shadow": "0 0 0 25px #0E49CF1A",
					transform: "scale(1)",
				},
			},

			bounce: {
				"0%, 100%": {
					transform: "translateY(-25%)",
					"animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
				},
				"50%": {
					transform: "translateY(0)",
					"animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
				},
			},
		},
	},
	plugins: [],
};
