import React from "react";
import "./Footer.css";
import logo from "../../../images/logo.png";
import CallIcon from '@mui/icons-material/Call';
import BusinessIcon from '@mui/icons-material/Business';

function Footer(){

    return(
        <footer className="footer-distributed">

			<div className="footer-left">

			<img src={logo}  alt=""/>

				<p className="footer-links">
					Thank you for your visited.
				</p>

				<p className="footer-company-name"> © 2022</p>
			</div>

			<div className="footer-center">
				<h3><span>ADDRESS</span></h3>
				<p>
					<BusinessIcon/>
					54 Nguyen Luong Bang, Hoa Khanh Bac , Lien Chieu, Da Nang.
				</p>

				<p>
					<CallIcon/>
					1234567890
				</p>

				

			</div>

			<div className="footer-right">
			<h3><span>ABOUT</span></h3>

				<p className="footer-company-about">
					This project was created to find all special things.<br/>
                    Author:<br/>
                    Do Quang Huy.<br/>
				</p>


			</div>

		</footer>
    )
}

export default Footer