import React from "react";
import {
	Link
} from "react-router-dom";
import { HeaderWrapper } from "./style";

export default function Header() {
	return (
		<HeaderWrapper>
			<ul>

				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="/signup">Signup</Link>
				</li>
				<li>
					<Link to="/">Home</Link>
				</li>
			</ul>
		</HeaderWrapper>
	);
}
