import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 32,
		marginTop: 28,
		justifyContent: 'space-between',
	},
	logo: {
		width: 72,
		height: 40,
	},
	right: {
		width: 20,
		height: 20
	},
	cover: {
		width: 311,
		height: 160,
		borderRadius: 8,
		marginTop: 32,
	},
	containerList: {
		width: '100%',
	},
	contentList: {
		paddingLeft: 32,
		paddingRight: 64,
		alignItems: 'flex-start'
	},
	emptyListText: {
		color: THEME.COLORS.CAPTION_300,
		fontSize: THEME.FONT_SIZE.SM,
		fontFamily: THEME.FONT_FAMILY.REGULAR,
	},
	emptyListContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	label: {
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.SEMI_BOLD,
    marginTop: 24,
    marginBottom: 8,
    paddingLeft: 14,
  },
  input: {
    height: 40,
    margin: 4,
    borderWidth: 1,
    padding: 14,
  },
	button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 12,
    margin: 9,
  },
})