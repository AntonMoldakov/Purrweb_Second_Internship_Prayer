import {StyleSheet} from 'react-native';
import colors from "../../styles/colors";

const styles = StyleSheet.create({
	cardPreview: {
		width: '90%',
		height: 66,
		flexDirection: 'row',
		borderBottomColor: colors.lightGray,
		borderBottomWidth: 1,
		alignItems: 'center',
		justifyContent: 'space-between',
		backgroundColor: colors.white,
		overflow: 'hidden',
	},
	swipeableContainer: {
		width: '100%',
	},
	swipeableChildContainer: {
		width: '100%',
	},
	cardStatus: {
		width: 3,
		height: 22,
		backgroundColor: colors.vinous,
	},
	cardText: {
		color: colors.lightBlack,
		width: '60%',
		fontSize: 17,
		lineHeight: 20,
	},
	subscribedText: {
		color: colors.lightBlack
	},
	totalCountText: {
		color: colors.lightBlack
	},
	cardTextChecked: {
		color: colors.lightBlack,
		width: '50%',
		fontSize: 17,
		lineHeight: 20,
		textDecorationLine: 'line-through',
	},
	cardIcons: {
		width: '30%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		marginLeft: 30,
		marginRight: 10,
	},
	cardLink: {
		width: '90%',
		height: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	cardIconsItem: {
		height: 22,
		flexDirection: 'row',
	},
	cardIconsItemMargin: {
		marginLeft: 10,
	},
	icon: {
		marginRight: 5,
	},
});

export default styles;
