/** @type {import('next').NextConfig} */

const NOTION_BASE_URL = "https://notion-api.splitbee.io/v1/page";

const URL_LIST = {
	coin: "d263c4b6f7e9465ba37528ba5c356502",
	prism: "eeb84e1e51a64fecadce878dc3a26359",
	simulator: "252e3c1aa9e24e71878c134af2fb4190",
};

const nextConfig = {
	reactStrictMode: true,

	async rewrites() {
		return [
			{
				source: "/api/project/coin",
				destination: `${NOTION_BASE_URL}/${URL_LIST.coin}`,
			},
			{
				source: "/api/project/prism",
				destination: `${NOTION_BASE_URL}/${URL_LIST.prism}`,
			},
			{
				source: "/api/project/simulator",
				destination: `${NOTION_BASE_URL}/${URL_LIST.simulator}`,
			},
		];
	},
};

module.exports = nextConfig;
