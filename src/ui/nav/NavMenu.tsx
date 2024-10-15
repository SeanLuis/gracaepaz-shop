"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { useState, type ComponentPropsWithRef, type KeyboardEvent, type PointerEvent } from "react";
import {
	Instagram,
	Facebook,
	MessageCircle,
	ShoppingBag,
	Backpack,
	WalletCards,
	GalleryHorizontalEnd,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/ui/shadcn/navigation-menu";
import { YnsLink } from "@/ui/YnsLink";

const links = [
	{
		key: "SocialNetwork.items.instagram",
		icon: Instagram,
		href: "https://www.instagram.com/graca_e_paz_croche",
	},
	{
		key: "SocialNetwork.items.facebook",
		icon: Facebook,
		href: "https://www.facebook.com/people/Gra%C3%A7a-Paz-Croch%C3%AA-Shop/61553362634893/",
	},
	{
		key: "SocialNetwork.items.whatsapp",
		icon: MessageCircle,
		href: "https://wa.me/5548996658979",
	},
] as const;

export function NavMenu() {
	const t = useTranslations("Global.navbar");

	const [value, setValue] = useState<string | undefined>(undefined);
	return (
		<NavigationMenu value={value} onValueChange={setValue}>
			<NavigationMenuList>
				<NavigationMenuItem value="shop">
					<NavigationMenuTriggerWithFixedUX
						onKeyboardOpen={() => setValue((value) => (value === "shop" ? undefined : "shop"))}
					>
						{t("Shop.title")}
					</NavigationMenuTriggerWithFixedUX>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
							<span className="row-span-3">
								<ListItem
									href="/products"
									title={t("Shop.items.allProducts.title")}
									icon={GalleryHorizontalEnd}
								>
									{t("Shop.items.allProducts.description")}
								</ListItem>
							</span>

							<ListItem href="/category/bags" title={t("Shop.items.bags.title")} icon={ShoppingBag}>
								{t("Shop.items.bags.description")}
							</ListItem>
							<ListItem
								href="/category/backpacks"
								title={t("Shop.items.backpacks.title")}
								icon={Backpack}
							>
								{t("Shop.items.backpacks.description")}
							</ListItem>
							<ListItem
								href="/category/pouch"
								title={t("Shop.items.pouches.title")}
								icon={WalletCards}
							>
								{t("Shop.items.pouches.description")}
							</ListItem>
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
				<NavigationMenuItem value="about">
					<NavigationMenuTriggerWithFixedUX
						onKeyboardOpen={() => setValue((value) => (value === "about" ? undefined : "about"))}
					>
						{t("SocialNetwork.title")}
					</NavigationMenuTriggerWithFixedUX>
					<NavigationMenuContent>
						<ul className="grid gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[500px] xl:w-[600px]">
							{links.map((link) => (
								<ListItem
									key={link.key}
									title={t(`${link.key}.title`)}
									href={link.href}
									target="_blank"
									icon={link.icon}
								>
									{t(`${link.key}.description`)}
								</ListItem>
							))}
						</ul>
					</NavigationMenuContent>
				</NavigationMenuItem>
			</NavigationMenuList>
		</NavigationMenu>
	);
}

const ListItem = ({
	className,
	title,
	children,
	href,
	ref,
	icon: Icon,
	...props
}: ComponentPropsWithRef<"a"> & { icon: React.ComponentType }) => {
	return (
		<li>
			<NavigationMenuLink asChild>
				<YnsLink
					ref={ref}
					className={cn(
						"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
						className,
					)}
					{...props}
					href={href ?? "#"}
				>
					<div className="flex items-center space-x-2">
						<Icon />
						<span className="text-sm font-medium leading-none">{title}</span>
					</div>
					<p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
				</YnsLink>
			</NavigationMenuLink>
		</li>
	);
};

const NavigationMenuTriggerWithFixedUX = ({
	onKeyboardOpen,
	...props
}: React.ComponentProps<typeof NavigationMenuTrigger> & {
	onKeyboardOpen?: (e: KeyboardEvent | PointerEvent) => void;
}) => {
	return (
		<NavigationMenuTrigger
			{...props}
			onClick={(e) => {
				// the menu should open on click on touch screens
				// in some browsers onClick can be triggered by PointerEvent
				if (e.nativeEvent instanceof PointerEvent && e.nativeEvent.pointerType !== "mouse") {
					return;
				}
				// prevent the default behavior for mouse users
				e.preventDefault();
			}}
			// the menu should open on click on touch screens
			onPointerDown={(e) => onKeyboardOpen?.(e)}
			onKeyDown={(e) => {
				// reimplement the default behavior for keyboard users
				if (e.key === "Enter" || e.key === " ") {
					return onKeyboardOpen?.(e);
				}
			}}
		/>
	);
};
