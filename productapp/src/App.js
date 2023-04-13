import React from 'react'
import sr from './ScrollReveal'
import "./index.css";
import { ArrowUpShort, SendFill, BatteryCharging, Plug, BagFill, CameraFill, DisplayFill } from "react-bootstrap-icons";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import {Model} from "./components/Iphone";


export class App extends React.Component {
  constructor(props) {
    super(props)
    this.home__headerRef = React.createRef()
  }

  componentDidMount = () => {
    const config = {
      distance: "60px",
      duration: 2500,
      delay: 500,
	  origin: 'bottom',
	  reset: true,
    }
    
    sr.reveal(`.home__header, .section__title`, config);
	sr.reveal(`.home__img`, { distance: "100px", duration: 2500, delay: 500, origin: 'top', reset: false })
    sr.reveal(`.home__footer`, config);

    sr.reveal(`.colors__card`, { origin: "top", interval: 100 });
    sr.reveal(`.specs__data, .discount__animate`, { distance: "100px", duration: 2500, delay: 500, origin: 'left', reset: false });

    sr.reveal(`.specs__img, .discount__img`, { distance: "100px", duration: 2500, delay: 500, origin: 'right', reset: false });
    sr.reveal(`.360__3d`, { origin: "top" });
    sr.reveal(`.360__data`, config);
  }

render () {
	return (
    	<div>
  			<header className="header" id="header">
    			<nav className="nav container">
      				<a href="#!" className="nav__logo">
					  <img src={process.env.PUBLIC_URL + "/logo2.png"} alt="logo"></img>
		  			</a>
      				<div className="nav__menu" id="nav-menu">
			  			<ul className="nav__list">
				  			<li className="nav__item">
					  			<a href="#home" className="nav__link active-link">Home</a>
				  			</li>
				  			<li className="nav__item">
					  			<a href="#specs" className="nav__link">Specs</a>
				  			</li>
				  			<li className="nav__item">
					  			<a href="#360" className="nav__link">360° View</a>
				  			</li>
				  			<li className="nav__item">
					  			<a href="#colors" className="nav__link">Colors</a>
				  			</li>
						</ul>
					</div>
    			</nav>
  			</header>
  			<div className="home section" id="home">
				<div className="home__container container grid">
					<div>
						<img src={process.env.PUBLIC_URL + "/iphone_home.png"} alt="" className="home__img"></img>
					</div>
      				<div className="home__data">
						<div className="home__header">
							<h1 className="home__title">XYZ</h1>
							<h2 className="home__subtitle">Phone</h2>
						</div>
						<div className="home__footer">
							<h3 className="home__title-description">Overview</h3>
							<p className="home__description">Excellent choice for those looking for a sleek and powerful device. Its large, high-resolution display and fast processor make it perfect for gaming and streaming media.
					</p>
					<a href="#!" className="button button--flex">
						<span className="button--flex">
            <BagFill></BagFill> Add to Bag
						</span>
						<span className="home__price">1249€</span>
					</a>
				</div>
			</div>
      </div>
  </div>
  <section className="specs section grid" id="specs">
		<h2 className="section__title section__title-gradient">Specs</h2>
		<div className="specs__container container grid">
			<div className="specs__content grid">
				<div className="specs__data">
					<CameraFill></CameraFill>
					<h3 className="specs__title">Camera</h3>
					<span className="specs__subtitle">48MP Main: 24 mm, ƒ/1.78 aperture<br></br>12MP Ultra Wide: 13 mm, ƒ/2.2 aperture and 120° field of view<br></br>2MP 2x Telephoto: 48 mm, ƒ/1.78 aperture</span>
				</div>
				<div className="specs__data">
					<BatteryCharging></BatteryCharging>
					<h3 className="specs__title">Battery</h3>
					<span className="specs__subtitle">3200 mAh<br></br>Up to 95 hours</span>
				</div>
				<div className="specs__data">
					<Plug></Plug>
					<h3 className="specs__title">Power</h3>
					<span className="specs__subtitle">Fast charge up to 20W<br></br>Wireless charging up to 7.5W</span>
				</div>
				<div className="specs__data">
					<DisplayFill></DisplayFill>
					<h3 className="specs__title">Display</h3>
					<span className="specs__subtitle">2556x1179 resolution<br></br>6.1‑inch OLED display</span>
				</div>
			</div>

			<div>
				<img src={process.env.PUBLIC_URL + "/specs.png"} alt="" className="specs__img"></img>
			</div>
		</div>
	</section>
  <section className="360 section grid" id="360">
		<h2 className="section__title section__title-gradient">360° View</h2>
		<div className="360__container container grid">
       	<Canvas className="360__3d" style={{height: "500px"}} camera={{ position: [0, 0, 1.5] }}>
        	<OrbitControls enableZoom={true} />
        	<ambientLight intensity={1.5} />
        	<directionalLight position={[-2, 5, 2]} />
        	<Model scale={[11.0,11.0,11.0]}/>
      	</Canvas>	
			<div className="360__data">
				<p className="360__description">
				</p>
			</div>
		</div>
	</section>
	<section className="colors section" id="colors">
		<h2 className="section__title section__title-gradient colors__line">
			Choose <br></br> Your Style
		</h2>
		<div className="colors__container container grid">
			<article className="colors__card">
				<div className="colors__content">
					<img src={process.env.PUBLIC_URL + "/ihpone_color1.png"} alt="" className="colors__img"></img>

					<h3 className="colors__title">Space Black</h3>
					<span className="colors__price">$1249</span>

					<button className="button button--flex colors__button">
          <BagFill></BagFill>
					</button>
				</div>
			</article>
			<article className="colors__card">
				<div className="colors__content">
					<img src={process.env.PUBLIC_URL + "/iphone_color2.png"} alt="" className="colors__img"></img>

					<h3 className="colors__title">Deep Purple</h3>
					<span className="colors__price">$1249</span>

					<button className="button button--flex colors__button">
					<BagFill></BagFill>
					</button>
				</div>
			</article>
			<article className="colors__card">
				<div className="colors__content">
					<img src={process.env.PUBLIC_URL + "/iphone_color3.png"} alt="" className="colors__img"></img>

					<h3 className="colors__title">Night Black</h3>
					<span className="colors__price">$1249</span>

					<button className="button button--flex colors__button">
					<BagFill></BagFill>
					</button>
				</div>
			</article>
		</div>
	</section>
  <section className="discount section">
		<div className="discount__container container grid">
			<div className="discount__animate">
				<h2 className="discount__title">Sign up for our <br></br> newsletter</h2>
				<p className="discount__description">And get 50% off your next purchase.</p>
			<div className="discount__content">
				<button className="button button--flex">
					<SendFill size={15}></SendFill>Subscribe
				</button>
			</div>
			</div>
			<img src="https://assets.codepen.io/7773162/discount.png" alt="" className="discount__img"></img>
		</div>
	</section>
  <footer className="footer section">
	<div className="footer__container container grid">
		<a href="#!" className="footer__logo">
		<img src={process.env.PUBLIC_URL + "/logo2.png"} alt="logo"></img>
		</a>

		<div className="footer__content">
			<h3 className="footer__title">Products</h3>

			<ul className="footer__links">
				<li>
					<a href="#!" className="footer__link" >Phones</a>
				</li>
				<li>
					<a href="#!" className="footer__link" >Earphones</a>
				</li>
				<li>
					<a href="#!" className="footer__link" >Earbuds</a>
				</li>
				<li>
					<a href="#!" className="footer__link" >Accesories</a>
				</li>
			</ul>
		</div>

		<div className="footer__content">
			<h3 className="footer__title">Support</h3>

			<ul className="footer__links">
				<li>
					<a href="#!" className="footer__link" rel="noreferrer">Product help</a>
				</li>
				<li>
					<a href="#!" className="footer__link" rel="noreferrer">Register</a>
				</li>
				<li>
					<a href="#!" className="footer__link" rel="noreferrer">Updates</a>
				</li>
				<li>
					<a href="#!" className="footer__link" rel="noreferrer">Provides</a>
				</li>
			</ul>
		</div>
	</div>

</footer>
<a href="#" className="scrollup" id="scroll-up">
	<ArrowUpShort color="white" size={50} />
</a>
</div>
    )
  }
}
export default App