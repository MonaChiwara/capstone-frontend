import './Home.css'

const Home = () => {
    return (
        <div >
            <div id='divImage'>
                <img src="https://www.sykescottages.co.uk/blog/wp-content/uploads/2020/08/road-trip-in-the-UK-1.jpg" alt="" />

            </div>
            <div id='divOne' className='body'>
                <h1>EnRoute</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae ipsum dolor magni officia adipisci vel veniam earum minus libero at possimus, consequatur rerum, repellat eligendi necessitatibus excepturi. Explicabo, molestias ea.</p>
            </div>
            <div id='divTwo' className='body'>
                <h2 id='about'>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatum impedit veniam perspiciatis nesciunt soluta! Sed repudiandae voluptatum ipsum, obcaecati quisquam necessitatibus culpa ipsam ab repellat dolores iure minus, laudantium voluptatibus sunt in, nam similique velit hic ex. Sequi modi, atque sunt inventore similique reiciendis voluptatum nam beatae? Harum accusamus eligendi, ipsa porro saepe possimus ullam quisquam, id temporibus, molestiae vel laudantium. Similique repellendus esse aut dolore quidem impedit cupiditate, illum nulla! Similique asperiores aut iste iure mollitia dignissimos enim animi saepe neque dicta amet provident sed exercitationem optio, magnam dolore! Natus eum quo ducimus, sapiente voluptatum nam laudantium rem veniam dolor dolores, pariatur adipisci, fugiat provident corrupti est voluptate vitae. Totam similique dignissimos cum neque commodi saepe, eos unde nobis ipsum hic sunt sint? Quaerat voluptatibus eum eaque consequuntur accusamus vero obcaecati, iure eveniet dolorem atque molestias, id tenetur non rem assumenda, itaque quia quae ipsa quisquam!</p>

            </div>

            <div id='divFour' className='body'>
                <h2 id='events'>Upcoming Events</h2>
                <div id='card'>
                    <div className="card cardHome">
                        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/06/04/0b/60/reunion-tower.jpg?w=1200&h=1200&s=1" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Dallas Meet-and-Greet</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">RSVP</a>
                        </div>
                    </div>
                    <div className="card cardHome" >
                        <img src="https://www.travelandleisure.com/thmb/hAATex0MmGutTeWfLDHDO4dnOPg=/1800x1200/filters:fill(auto,1)/boston-massachusetts-BOSTONTG0221-719aef2eeb1c4929b6c839715e34a69e.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Boston Meet-and-Greet</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">RSVP</a>
                        </div>
                    </div>
                    <div className="card cardHome">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/32/20190616154621%21Echo_Park_Lake_with_Downtown_Los_Angeles_Skyline.jpg" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">LA Meet-and-Greet</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">RSVP</a>
                        </div>
                    </div>
                </div>
            </div>

            <div id='divFive' className='body'>
                <h2 id='connect'>
                    Lets Connect
                </h2>
                <form Name='form'>

                    <div className="mb-2">
                        <label htmlFor="exampleInputName" className="form-label"> Full Name</label>
                        <input type="password" className="form-control" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    <p>Thanks for submitting!</p>
                </form>
            </div>

        </div>
    );
}

export default Home;
