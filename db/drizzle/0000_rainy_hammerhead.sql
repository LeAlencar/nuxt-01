CREATE TABLE `users` (
	`id` integer PRIMARY KEY NOT NULL,
	`first_name` text,
	`email` text,
	`created_at` text DEFAULT CURRENT_TIMESTAMP
);
--> statement-breakpoint
CREATE UNIQUE INDEX `users_email_unique` ON `users` (`email`);