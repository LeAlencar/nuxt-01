CREATE TABLE `products` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`price` integer,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
