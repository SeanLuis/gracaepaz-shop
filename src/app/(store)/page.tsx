import Image from "next/image";
import type { Metadata } from "next/types";
import { getTranslations } from "next-intl/server";
import * as Commerce from "commerce-kit";
import { ProductList } from "@/ui/products/productList";
import { CategoryBox } from "@/ui/CategoryBox";
import BackpacksImage from "@/images/backpacks.jpg";
import InitPorductImage from "@/images/init-product.png";
import BagslImage from "@/images/bags.jpg";
import PoucheslImage from "@/images/pouches.jpg";
import { YnsLink } from "@/ui/YnsLink";
import { publicUrl } from "@/env.mjs";

export const metadata = {
	alternates: { canonical: publicUrl },
} satisfies Metadata;

export default async function Home() {
	const t = await getTranslations("/");

	const products = await Commerce.productBrowse({ first: 6 });

	return (
		<main>
			<section className="rounded bg-neutral-100 py-8 sm:py-12">
				<div className="mx-auto grid grid-cols-1 items-center justify-items-center gap-8 px-8 sm:px-16 md:grid-cols-2">
					<div className="max-w-md space-y-4">
						<h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl">
							{t("hero.title")}
						</h2>
						<p className="text-pretty text-neutral-600">{t("hero.description")}</p>
						<YnsLink
							className="inline-flex h-10 items-center justify-center rounded-full bg-neutral-900 px-6 font-medium text-neutral-50 transition-colors hover:bg-neutral-900/90 focus:outline-none focus:ring-1 focus:ring-neutral-950"
							href={t("hero.link")}
						>
							{t("hero.action")}
						</YnsLink>
					</div>
					<Image
						alt="Bag"
						loading="eager"
						priority={true}
						className="rounded"
						height={450}
						width={450}
						src={InitPorductImage}
						style={{
							objectFit: "cover",
						}}
						sizes="(max-width: 640px) 70vw, 450px"
					/>
				</div>
			</section>
			<ProductList products={products} />

			<section className="w-full py-8">
				<div className="grid grid-cols-3 gap-8">
					{[
						{ categorySlug: "backpacks", src: BackpacksImage },
						{ categorySlug: "bags", src: BagslImage },
						{ categorySlug: "pouch", src: PoucheslImage },
					].map(({ categorySlug, src }) => (
						<CategoryBox key={categorySlug} categorySlug={categorySlug} src={src} />
					))}
				</div>
			</section>
		</main>
	);
}
