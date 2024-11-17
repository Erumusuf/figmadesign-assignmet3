import React from 'react'

function Hero() {
    return (
        <div>
            <div className='hero-sec'>
                <div className='hero-text'>
                    <h3>Get More Done with White Space</h3>
                    <p>Project management software that enables your teams to collaborate, plan,
                        analyze and manage everyday tasks</p>
                    <button>Try whitespace free</button>
                </div>
                <div className='hero-square'></div>
            </div>

            <div className='hero-sec1'>
                <div className='hero1-text'>
                    <h3>Project Management</h3>
                    <p>Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
                    <button>Get Started</button>
                </div>
                <div className='hero-square'></div>
            </div>
            
            <div className='hero-sec1'>
                <img src='/circle.png'></img>
                <div className='hero1-text'>
                    <h3>Work together</h3>
                    <p>With whitepace, share your notes with your colleagues and collaborate on them. You can also publish a note to the internet and share the URL with others. </p>
                    <button>Try it now </button>
                </div>
            
            </div>

            <div className='hero-sec'>
                <div className='hero-text'>
                    <h3>Use as Extension</h3>
                    <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
                    <button>Let's Go </button>
                </div>
                <div className='hero-square'></div>
            </div>

            <div className='hero-sec1'>
                <div className='hero-square'></div>
                <div className='hero1-text'>
                    <h3>Customise it to your needs</h3>
                    <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
                    <button>Let's Go</button>
                </div>
            
            </div>

            <div className='hero-sec2'>
                <div className='hero2-text'>
                    <h3>Your work, everywhere you are</h3>
                    <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
                    <button>Try Taskey</button>
                </div>
            </div>

            <div className='hero-sec3'>
                    <div className='hero3-text'>
                    <h3>Our sponsors</h3>
                    <div className='image-main'>
                        <img src='/appleLogo.png' className='image-log'></img>
                        <img src='/microsoft.png' className='image-log'></img>
                        <img src='/slacklogo.png' className='image-log'></img>
                        <img src='/GoogleLogo.png' className='image-log'></img>
                    </div>
                    </div>
            </div>



        </div>
    )
}

export default Hero