interface MockComponentProps {
	text: string;
}

export const MockComponent = ({ text }: MockComponentProps) => (
	<div>
		<p>{text}</p>
	</div>
);
