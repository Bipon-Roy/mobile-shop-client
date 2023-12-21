import logo from "../../../assets/Images/logo.webp";
const Footer = () => {
    return (
        <div>
            <footer className=" bg-black text-white">
                <div className="footer p-10 max-w-[1380px] mx-auto justify-between">
                    <aside>
                        <img src={logo} className="w-[150px]" alt="Brand Logo" />
                        <p>
                            Apple Gadgets Industries Ltd.
                            <br />
                            Providing reliable tech since 2011
                        </p>
                    </aside>
                    <nav>
                        <header className="footer-title">Services</header>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Company</header>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <header className="footer-title">Legal</header>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
