const Footer = () => {
    return (
        <div>
            <footer className="bg-light text-center text-lg-start">
            <div className="text-center p-3 icons">
            <i className="fa-brands fa-facebook-f" id="icon"></i>
            <i className="fa-brands fa-instagram" id="icon"></i>
            <i className="fa-brands fa-twitter" id="icon"></i>
                <i className="fa-brands fa-tiktok" id="icon"></i>
                </div>
                <div className="text-center p-3">
                    © 2020 Copyright:
                    <a className="text-dark" href="https://enroute.com/">EnRoute.com</a>
                </div>
                

            </footer>
        </div>
    );
}

export default Footer;