import { SeoH1 } from "@/ui/SeoH1";
import { SearchNav } from "@/ui/nav/SearchNav";
import { NavMenu } from "@/ui/nav/NavMenu";
import { YnsLink } from "@/ui/YnsLink";

export const Categories = [
	{ name: "Bags", slug: "bags", key: "bags" },
	{ name: "Backpacks", slug: "backpacks", key: "backpacks" },
	{ name: "Pouches", slug: "pouch", key: "pouches" },
	{ name: "Accessories", slug: "accessories", key: "accessories" },
	{ name: "Clothes", slug: "clothes", key: "clothes" },
];

export const Nav = () => {
	return (
		<header className="border-b py-4">
			<div className="sm:items-centerm mx-auto flex max-w-7xl flex-col items-start gap-2 px-4 sm:flex-row sm:flex-wrap sm:items-center sm:px-6 md:flex-nowrap lg:px-8">
				<YnsLink href="/">
					<SeoH1 className="-mt-0.5 whitespace-nowrap text-xl font-bold">Graça & Paz</SeoH1>
				</YnsLink>

				<div className="sm:mr-auto">
					<NavMenu />
				</div>

				<div className="flex items-center justify-start gap-x-6">
					<SearchNav />
					{/* <CartSummaryNav /> */}
				</div>
			</div>
		</header>
	);
};
