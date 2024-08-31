import { type SVGAttributes } from "react";
import { getTranslations } from "next-intl/server";
import { Categories } from "@/ui/nav/Nav";
import { YnsLink } from "@/ui/YnsLink";
import { Newsletter } from "@/ui/footer/Newsletter.client";

export async function Footer() {
	const t = await getTranslations("Global");
	return (
		<footer className="w-full bg-neutral-50 p-6 text-neutral-800 md:py-12">
			<div className="container flex max-w-7xl flex-row flex-wrap justify-center gap-16 text-sm sm:justify-between">
				<div className="flex w-full max-w-sm flex-col gap-2">
					<h3 className="font-semibold">{t("footer.newsletterTitle")}</h3>
					<Newsletter />
				</div>
				<nav className="grid grid-cols-2 gap-16">
					<section>
						<h3 className="mb-2 font-semibold">{t("footer.categoriesTitle")}</h3>
						<ul role="list" className="grid gap-1">
							{Categories.map((category) => (
								<li key={category.slug}>
									<YnsLink
										className="underline-offset-4 hover:underline"
										href={`/category/${category.slug}`}
									>
										{t(`navbar.Shop.items.${category.key}.title`)}
									</YnsLink>
								</li>
							))}
						</ul>
					</section>
					<section>
						<h3 className="mb-2 font-semibold">Misc</h3>
						<ul role="list" className="grid gap-1">
							<li>
								<YnsLink
									className="underline-offset-4 hover:underline"
									href="mailto:gracaepazcroche@gmail.com"
								>
									Contate-nos
								</YnsLink>
							</li>
						</ul>
					</section>
				</nav>
			</div>
			<div className="container mt-8 flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-neutral-500 md:flex-row">
				<div>
					<p>© 2024 Graça & Paz.</p>
					{/* <p>Handcrafted with passion in California.</p> */}
				</div>
				<div className="flex items-center gap-4">
					<YnsLink
						className="inline-flex items-center gap-1 transition-colors hover:text-neutral-700"
						href="https://www.instagram.com/graca_e_paz_croche"
					>
						<TwitterIcon className="h-4 w-4" /> @gracaepazcroche
						<span className="sr-only">Instagram</span>
					</YnsLink>
				</div>
			</div>
		</footer>
	);
}

function TwitterIcon(props: SVGAttributes<SVGSVGElement>) {
	return (
		<svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 596 596" fill="none">
			<path
				fill="#fff"
				d="m1 19 230 307L0 577h52l203-219 164 219h177L353 252 568 19h-52L329 221 179 19H1Zm77 38h82l359 481h-81L78 57Z"
			/>
		</svg>
	);
}
