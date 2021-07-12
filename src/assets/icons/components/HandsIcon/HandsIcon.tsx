import React from "react";
import colors from "styles/colors";
import Svg, {Path} from "react-native-svg";
import {StyleProp, View, ViewStyle} from "react-native";

interface HandsProps {
	color?: string,
	size?: number,
	style?: StyleProp<ViewStyle>
}

const HandsIcon = ({color = colors.lightBlue, size = 24, style}: HandsProps) => {
	return (
		<View style={style}>
			<Svg width={size} height={size} viewBox="0 0 29 23" fill="none">
				<Path fill-rule="evenodd" clip-rule="evenodd"
				      d="M17.2938 0.0425902C17.7765 -0.0611086 18.2562 0.0406981 18.6134 0.172534C18.9824 0.308703 19.3527 0.525317 19.637 0.798633C20.291 1.42736 20.9578 2.56688 21.4789 3.54906C21.9169 4.37438 22.3103 5.20446 22.5669 5.74602C22.6278 5.8745 22.681 5.98668 22.7252 6.07878C23.005 6.66075 23.322 7.61931 23.5924 8.56761C23.8672 9.53112 24.1171 10.5665 24.2494 11.3346C24.3799 12.0911 24.5533 12.7958 24.7208 13.4488L24.786 13.7019C24.8696 14.026 24.9521 14.3461 25.0222 14.6488C25.1248 14.6761 25.2327 14.702 25.3466 14.7275C25.4392 14.7482 25.5359 14.7687 25.637 14.7895L25.7869 14.8202C26.1605 14.8961 26.6031 14.9861 27.0038 15.1232C27.4722 15.2834 27.9985 15.5433 28.399 16.0331C28.8127 16.5388 29 17.1752 29 17.9103C29 18.8179 28.8113 19.7237 28.3754 20.4631C27.9272 21.2233 27.2068 21.8133 26.2269 21.9589C25.3689 22.0864 24.5919 21.9253 23.7695 21.6315C23.1787 21.4204 22.4974 21.114 21.7061 20.758L21.6813 20.7471C21.4243 20.6313 21.1559 20.5106 20.8751 20.3865C20.3557 20.1565 19.8733 19.9838 19.3972 19.8133L19.3947 19.8126L19.2849 19.7733C18.7893 19.5958 18.2692 19.4066 17.7963 19.1561C17.3077 18.8972 16.8435 18.5607 16.45 18.0692C16.0582 17.5802 15.7745 16.9851 15.5785 16.2582C15.4073 15.6238 15.3192 14.7145 15.2539 13.8277C15.2235 13.4162 15.1981 13.0112 15.1732 12.6131C15.1405 12.0924 15.1086 11.5836 15.0674 11.0882C14.968 9.89574 14.9518 8.62358 15.2041 7.67858C15.3285 7.21276 15.5594 6.66381 16.036 6.299C16.3059 6.09233 16.6019 5.98265 16.9044 5.94951C16.5411 5.05999 16.2666 4.57689 16.0667 4.2249L16.0311 4.16234C15.916 3.95922 15.7804 3.71953 15.6868 3.44689C15.5845 3.1494 15.5439 2.85436 15.5439 2.51799C15.5439 2.29515 15.6033 2.05907 15.6547 1.89067C15.7145 1.69499 15.8009 1.4727 15.9135 1.25371C16.024 1.03868 16.1761 0.794971 16.3788 0.580859C16.5773 0.37102 16.88 0.131518 17.2938 0.0425902ZM20.2224 10.5995C20.1888 10.4171 20.1504 10.2224 20.1068 10.0204C20.0896 9.93004 20.0715 9.83757 20.0529 9.74321C19.8884 8.91484 19.6631 7.91765 19.373 6.94445C19.2402 6.49877 19.0938 6.05815 18.9333 5.64104C18.4354 4.34655 18.0557 3.67742 17.8041 3.23424L17.7712 3.17644C17.6459 2.95525 17.6029 2.86882 17.5781 2.79674C17.5634 2.75377 17.5472 2.69335 17.5444 2.56066C17.5487 2.54125 17.556 2.51238 17.5674 2.47521C17.5955 2.38341 17.6384 2.27263 17.6921 2.16832C17.7268 2.10088 17.7596 2.04833 17.7874 2.00994C17.8251 2.01763 17.8702 2.03014 17.9209 2.04882C18.073 2.10497 18.1952 2.18688 18.251 2.24047C18.6411 2.61553 19.1744 3.47301 19.7122 4.4865C20.1261 5.26647 20.4933 6.04094 20.7511 6.58477L20.8705 6.83617L20.9227 6.9453C21.1229 7.3618 21.4017 8.17839 21.6691 9.11614C21.9321 10.0387 22.1624 11.0002 22.2786 11.6743C22.4232 12.514 22.6136 13.2833 22.7834 13.9455L22.8508 14.2076C22.8914 14.3652 22.9297 14.5138 22.9652 14.6544C23.0555 15.0118 23.1279 15.3174 23.1749 15.5862L23.2694 16.1266L23.7759 16.3373C24.2739 16.5444 24.7993 16.6589 25.233 16.7484L25.3892 16.7804C25.7812 16.8607 26.0867 16.9232 26.3562 17.0155C26.6478 17.1152 26.7815 17.2142 26.851 17.2992C26.9072 17.3682 27 17.5222 27 17.9103C27 18.5644 26.8607 19.0943 26.6526 19.4474C26.4567 19.7797 26.2173 19.9383 25.933 19.9806C25.5271 20.041 25.1041 19.9845 24.4424 19.748C23.9326 19.5659 23.3568 19.307 22.5963 18.9652C22.319 18.8404 22.017 18.7047 21.6848 18.5576C21.0946 18.2964 20.5463 18.1003 20.076 17.9322L19.9594 17.8905C19.4473 17.707 19.0596 17.562 18.7327 17.3888C18.4214 17.2239 18.1937 17.0471 18.0111 16.8191C17.8267 16.5887 17.65 16.2583 17.5094 15.7372C17.3956 15.3154 17.3158 14.5935 17.2484 13.6805C17.222 13.3236 17.1973 12.9309 17.1721 12.5321V12.5295C17.1373 11.9796 17.1017 11.418 17.0605 10.9222C16.9634 9.75615 16.9796 8.78173 17.1365 8.19457C17.1613 8.10161 17.1857 8.03374 17.2063 7.98522C17.2262 8.00408 17.2543 8.03343 17.2892 8.07762C17.3483 8.15251 17.4269 8.27013 17.5183 8.45177C17.7185 8.84923 17.8922 9.37773 18.0345 9.93999C18.0754 10.1016 18.1128 10.2623 18.1469 10.4193C18.2343 10.878 18.3015 11.2761 18.3489 11.5737C18.3773 11.7526 18.3984 11.8946 18.4125 11.9911L18.428 12.1006L18.4316 12.1276L18.4325 12.1337L18.4326 12.1349C18.5044 12.6776 18.9991 13.0616 19.5426 12.9967C20.0862 12.9316 20.4764 12.4418 20.4183 11.8974L19.424 12.0038C20.4183 11.8974 20.4183 11.8974 20.4183 11.8974L20.4181 11.8955L20.4177 11.8918L20.4164 11.8797L20.4114 11.8369C20.4071 11.8003 20.4009 11.7479 20.3923 11.682C20.3754 11.5503 20.3497 11.3634 20.3143 11.1384C20.2891 10.9775 20.2585 10.7956 20.2224 10.5995ZM11.7062 0.0427122C11.2235 -0.0609865 10.7438 0.0408202 10.3866 0.172656C10.0176 0.308826 9.64734 0.525439 9.36304 0.798755C8.70898 1.42748 8.04224 2.567 7.52112 3.54918C7.08313 4.3745 6.6897 5.20458 6.43311 5.74614C6.37219 5.87462 6.31897 5.9868 6.27478 6.07891C5.995 6.66088 5.67798 7.61943 5.40759 8.56774C5.13281 9.53124 4.88293 10.5666 4.75061 11.3347C4.62012 12.0912 4.44666 12.7959 4.27917 13.449L4.21399 13.702C4.13037 14.0261 4.04785 14.3462 3.97778 14.6489C3.79199 14.6985 3.58838 14.7432 3.36304 14.7897L3.21313 14.8203C2.83948 14.8962 2.39685 14.9862 1.99622 15.1233C1.52783 15.2836 1.00146 15.5434 0.600952 16.0332C0.187256 16.5389 0 17.1753 0 17.9104C0 18.818 0.188721 19.7239 0.624634 20.4632C1.07275 21.2234 1.79321 21.8135 2.77307 21.959C3.6311 22.0865 4.40808 21.9254 5.23047 21.6316C5.82129 21.4205 6.50256 21.1141 7.29395 20.7582C7.55835 20.6393 7.83508 20.5148 8.12488 20.3866C8.64429 20.1566 9.12671 19.9839 9.60278 19.8135L9.60535 19.8127L9.71509 19.7734C10.2107 19.5959 10.7308 19.4067 11.2037 19.1562C11.6923 18.8973 12.1565 18.5608 12.55 18.0693C12.9418 17.5803 13.2255 16.9852 13.4215 16.2583C13.5927 15.6239 13.6808 14.7146 13.7461 13.8279C13.7606 13.6313 13.7739 13.4363 13.7866 13.2428C13.8005 13.0311 13.8137 12.8213 13.8268 12.6133C13.8595 12.0925 13.8914 11.5837 13.9326 11.0884C14.032 9.89586 14.0482 8.62371 13.7959 7.6787C13.6715 7.21288 13.4406 6.66393 12.964 6.29912C12.6941 6.09246 12.3981 5.98278 12.0956 5.94963C12.4589 5.06011 12.7334 4.57701 12.9333 4.22502L12.9689 4.16246C13.0304 4.05388 13.0978 3.93486 13.1615 3.80596C13.2169 3.69371 13.2697 3.57396 13.3132 3.44701C13.3912 3.22014 13.4333 2.99468 13.4489 2.75121C13.4537 2.67546 13.4561 2.59795 13.4561 2.51812C13.4561 2.38036 13.4335 2.2376 13.4039 2.10887C13.3857 2.02928 13.365 1.95513 13.3453 1.8908C13.2855 1.69512 13.1991 1.47283 13.0865 1.25383C13.0298 1.14342 12.962 1.02544 12.8821 0.907825C12.8064 0.796374 12.7198 0.685168 12.6212 0.580981C12.4227 0.371142 12.12 0.13164 11.7062 0.0427122ZM8.68567 11.1385C8.7345 10.828 8.80273 10.4399 8.89319 10.0205L8.91382 9.9132L8.94714 9.74333C9.11157 8.91497 9.33691 7.91777 9.62695 6.94457C9.75977 6.49889 9.90625 6.05828 10.0667 5.64116C10.5646 4.34667 10.9443 3.67754 11.1959 3.23436L11.2288 3.17656C11.3541 2.95537 11.3971 2.86895 11.4219 2.79686C11.4366 2.75389 11.4528 2.69347 11.4556 2.56078L11.4501 2.53777C11.4459 2.5208 11.4401 2.49987 11.4326 2.47533C11.4045 2.38353 11.3616 2.27275 11.3079 2.16844C11.2859 2.12584 11.2648 2.08916 11.2451 2.05822C11.2338 2.04021 11.2229 2.02416 11.2126 2.01006C11.1749 2.01775 11.1298 2.03026 11.0791 2.04894C10.927 2.10509 10.8048 2.187 10.749 2.24059C10.3589 2.61565 9.82556 3.47313 9.28784 4.48662C9.08948 4.8604 8.90186 5.23296 8.73181 5.57946C8.54712 5.95592 8.38318 6.30168 8.2489 6.58489C8.18457 6.72063 8.12708 6.84191 8.07727 6.94542C7.87708 7.36193 7.59827 8.17852 7.33093 9.11626C7.06787 10.0388 6.83765 11.0004 6.72144 11.6744C6.57678 12.5141 6.38635 13.2834 6.21655 13.9457L6.14917 14.2078C6.00549 14.7657 5.8905 15.2118 5.82507 15.5863L5.73059 16.1267L5.22412 16.3374C4.72607 16.5445 4.20068 16.659 3.76697 16.7485L3.61084 16.7805C3.21875 16.8608 2.91333 16.9233 2.6438 17.0156C2.35217 17.1153 2.21851 17.2143 2.14905 17.2993C2.09277 17.3683 2 17.5223 2 17.9104C2 18.5646 2.13928 19.0945 2.34741 19.4475C2.54333 19.7798 2.78271 19.9385 3.06702 19.9807C3.4729 20.041 3.89587 19.9846 4.55762 19.7482C5.06604 19.5665 5.64026 19.3083 6.39783 18.9679L6.40369 18.9653C6.68103 18.8406 6.98303 18.7048 7.31519 18.5577C7.9054 18.2965 8.45374 18.1005 8.92395 17.9324L9.04065 17.8906C9.55273 17.7071 9.94043 17.5621 10.2673 17.3889C10.4423 17.2963 10.5908 17.1998 10.7197 17.0926C10.8203 17.0091 10.9089 16.9191 10.9889 16.8192C11.1733 16.5889 11.35 16.2584 11.4906 15.7373C11.6044 15.3155 11.6842 14.5936 11.7516 13.6807C11.7699 13.432 11.7875 13.166 11.8049 12.8927L11.8279 12.5322C11.8627 11.9814 11.8982 11.4188 11.9395 10.9224C12.0366 9.75627 12.0204 8.78185 11.8635 8.19469C11.8387 8.10173 11.8143 8.03386 11.7937 7.98534C11.765 8.01256 11.7192 8.06157 11.6608 8.1455C11.6099 8.21837 11.5493 8.31761 11.4817 8.45189C11.2815 8.84935 11.1078 9.37786 10.9655 9.94011C10.9246 10.1017 10.8872 10.2624 10.8531 10.4194C10.7657 10.8782 10.6985 11.2762 10.6511 11.5738C10.6227 11.7527 10.6016 11.8948 10.5875 11.9912L10.572 12.1007L10.5684 12.1277L10.5675 12.1338L10.5674 12.135C10.4956 12.6777 10.0009 13.0618 9.4574 12.9968C8.91382 12.9318 8.52356 12.4419 8.58167 11.8976L9.57605 12.0039C8.58167 11.8976 8.58167 11.8976 8.58167 11.8976L8.58191 11.8956L8.58228 11.892L8.58362 11.8799L8.58862 11.837L8.59595 11.7753L8.60767 11.6821C8.62463 11.5504 8.65027 11.3635 8.68567 11.1385Z"
				      fill={color}/>
			</Svg>
		</View>

	)
}

export default HandsIcon
