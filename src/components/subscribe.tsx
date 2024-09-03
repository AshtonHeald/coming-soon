import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { supabase } from "@/lib/supabaseClient";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";

const FormSchema = z.object({
	email: z.string().email({
		message: "Invalid email address",
	}),
});

export default function Subscribe({
	email,
	notify,
}: {
	email: string;
	notify: string;
}) {
	const form = useForm<z.infer<typeof FormSchema>>({
		resolver: zodResolver(FormSchema),
		defaultValues: {
			email: "",
		},
	});

	async function onSubmit(data: z.infer<typeof FormSchema>) {
		try {
			const { error } = await supabase
				.from("newsletter_subscribers")
				.insert([{ email: data.email }]);

			if (error) throw error;

			toast({
				title: "Email Submitted",
				description: "Your email has been successfully added.",
			});
			form.reset();
		} catch (error) {
			const message =
				(error as Error).message ||
				"There was an error submitting your email.";
			toast({
				title: "Submission Error",
				description: message,
				variant: "destructive",
			});
		}
	}

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="flex flex-col md:flex-row gap-2.5 w-full max-w-xs md:max-w-sm mx-auto"
			>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem className="flex-1">
							<FormControl>
								<Input
									className="bg-background"
									placeholder={email}
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button type="submit">{notify}</Button>
			</form>
		</Form>
	);
}
