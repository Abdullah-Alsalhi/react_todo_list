// eslint-disable-next-line react/prop-types
const Container = ({ className = "container", children }, props) => (
	<div className={className} {...props}>
		{children}
	</div>
);

export default Container;
