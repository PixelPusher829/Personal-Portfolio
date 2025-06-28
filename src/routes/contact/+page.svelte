<svelte:head>
    <title>James Barnes - Contact Me</title>
</svelte:head>

<section id="contact" class="container">
    <div>
        <form action="post">
            <div>
                <label for="name">Name</label>
                <input type="text" name="name" id="name" />
            </div>
            <div>
                <label for="email">Email</label>
                <input type="email" name="email" id="email" />
            </div>
            <div>
                <label for="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="10"></textarea>
            </div>
            <div>
                <input type="checkbox" name="terms" id="terms" />
                <label for="terms">
                    <a href="/terms-of-service">I agree to the terms and conditions</a>
                </label>
            </div>
            <button type="submit" class="primary-btn">Submit</button>
        </form>
    </div>
    <div class="contact-content">
        <h2>Get in touch</h2>
        <p class="body-large">
            Have a question, comment, or idea? Reach out, I'm eager to hear from you and ready to
            help in any way I can.
        </p>
        <ul class="contact-info">
            <li>
                <a href="mailto:contactme@gmail">
                    <i class="fi fi-rr-envelope"></i>
                    contactme@gmail.com
                </a>
            </li>
            <li>
                <a href="tel:1234567890">
                    <i class="fi fi-rr-phone-call"></i>
                    (+1) 123 456 7890
                </a>
            </li>
            <li>
                <a href="https://www.google.co.za/maps">
                    <i class="fi fi-rr-marker"></i>
                    123 Sample St, Montreal, Canada
                </a>
            </li>
        </ul>
    </div>
</section>
