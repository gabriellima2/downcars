import anchors from "../../mocks/anchors.json";

export const Nav = () => (
	<nav className="flex items-center gap-14">
		<ul className="flex items-center gap-14 md:flex-row flex-col">
			{anchors.map((anchor) => (
				<li>
					<a
						href={anchor.href}
						className="text-base md:text-sm tracking-widest font-medium uppercase p-2 relative after:bg-accent-blue-transparent after:rounded after:w-0 after:h-[2px] after:absolute after:bottom-0 after:left-0 hover:after:w-full hover:after:transition-all"
					>
						{anchor.title}
					</a>
				</li>
			))}
		</ul>
	</nav>
);
