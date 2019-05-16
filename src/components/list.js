import React from "react";
import FolioCard from './card';

const List = ({title}) => {
	return(
		<div style={styles.container}>
			<h4>{title}</h4>
			<FolioCard/>
		</div>
	);
};

const styles = {
	container: {
		backgroundColor: "grey",
		borderRadius: 3,
		width: 300,
		padding: 6
	}
};

export default List;
