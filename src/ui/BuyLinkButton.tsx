"use client";
import { useTranslations } from "next-intl";
import { useTransition } from "react";
import { Loader2Icon } from "lucide-react";
import { Button } from "@/ui/shadcn/button";

export const BuyLinkButton = ({ productLink }: { productLink: string }) => {
	const t = useTranslations("Global.buttons");
	const [pending, startTransition] = useTransition();

	return (
		<Button
			size="lg"
			type="submit"
			className="w-full rounded-full text-lg"
			onClick={async () => {
				startTransition(() => {
					window.open(productLink, "_blank");
				});
			}}
			aria-disabled={pending}
		>
			{pending ? <Loader2Icon className="mr-2 h-4 w-4 animate-spin" /> : t("buyNow")}
		</Button>
	);
};
