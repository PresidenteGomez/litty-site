import React, { Component } from 'react';



class Footer extends Component {
    render() {
        return (
// < !--Footer -- >
            <footer class="footer text-center" id="connect">
                <h2 class="navi">Contact Us!</h2>
                <div class="container">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle" href="https://www.facebook.com/littysolar">
                                <i class="icon-social-facebook"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle" href="https://www.instagram.com/littysolar">
                                <i class="icon-social-instagram"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle" href="https://twitter.com/littysolar">
                                <i class="icon-social-twitter"></i>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a class="social-link rounded-circle" href="mailto:info@littysolar.com">
                                <i class="icon-envelope-letter"></i>
                            </a>
                        </li>

                    </ul>
                    <p class="text-muted small mb-0">Copyright &copy; Litty Solar 2018</p>
                </div>
            </footer>
        );
    }
}

export default Footer;

