import HomeLayout from "@/pages/HomeLayout";
import Home from "@/pages/HomeLayout/Home";
import About from "@/pages/AboutLayout";
import Contact from "@/pages/ContactLayout";
import UsefulLinks from "@/pages/UsefulLinksLayout";
import WordList from "@/pages/WordListLayout";
import PageNotFound from "@/pages/PageNotFoundLayout";

const routes = [
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "usefullinks",
				element: <UsefulLinks />,
			},
			{
				path: "wordlist",
				element: <WordList />,
			},
		],
	},
	{
		path: "*",
		element: <PageNotFound />,
	},
];

export default routes;
