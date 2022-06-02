import { NotionRenderer } from "react-notion-x";
import { ExtendedRecordMap } from "notion-types";
import { NotionAPI } from "notion-client";
import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";

const notion = new NotionAPI();

const Project = ({ recordMap }: { recordMap: ExtendedRecordMap }) => {
	if (!recordMap) {
		return null;
	}
	return <NotionRenderer recordMap={recordMap} fullPage={true} darkMode={false} />;
};

export default Project;

export const getStaticProps = async () => {
	const recordMap = await notion.getPage(process.env.COIN);
	return {
		props: {
			recordMap,
		},
		revalidate: 10,
	};
};
