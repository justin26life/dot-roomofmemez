CREATE TABLE `categories` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`icon` text NOT NULL,
	`sort_order` integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE `meme_categories` (
	`meme_id` integer NOT NULL,
	`category_id` text NOT NULL,
	PRIMARY KEY(`meme_id`, `category_id`),
	FOREIGN KEY (`meme_id`) REFERENCES `memes`(`id`) ON UPDATE no action ON DELETE cascade,
	FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
CREATE TABLE `memes` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`caption` text DEFAULT '' NOT NULL,
	`media_type` text NOT NULL,
	`media_key` text NOT NULL,
	`created_at` integer DEFAULT (unixepoch()) NOT NULL
);
