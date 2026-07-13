import React from "react";

function Team() {
    return (
        <div className="container">
            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center ">People</h1>
            </div>

            <div
                className="row p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-6 p-3 text-center">
                    <img
                        src="media/images/linkedin_photo.png"
                        style={{ borderRadius: "100%", width: "50%" }}
                    />
                    <h4 className="mt-2">Ayush Gotefode</h4>
                    <h5>Full-Stack Developer (MERN)</h5>
                </div>
                <div className="col-6 p-3">
                    <p>
                        I'm Ayush Gotefode, a E&TC student who loves building real-world
                        software and solving practical problems through code. I enjoy turning ideas
                        into products that people can actually use.
                    </p>

                    <p>
                        My main focus is full-stack development with React, Node.js, Express and
                        PostgreSQL. I've built projects like a digital banking application and actively
                        contribute to open-source to gain real-world development experience.
                    </p>

                    <p>
                        When I'm not coding, you'll probably find me at the gym, learning something
                        new or exploring ways to improve myself every day.
                        <br />
                        Connect on <a href="https://www.linkedin.com/in/ayushgotefode/">Linkedin</a> / <a href="https://leetcode.com/u/Ayush_2028/">LeetCode</a> /{" "}
                        <a href="https://drive.google.com/file/d/1f8KW5HW9t_cwUiEn-MO5uIW-mZ-15z47/view?usp=share_link">Resume</a>
                    </p>
                </div>
            </div>

            <div className="row p-3 mt-5 border-top">
                <h1 className="text-center ">Gang</h1>
            </div>

            <div
                className="row mt-1 p-3 text-muted"
                style={{ lineHeight: "1.8", fontSize: "1.2em" }}
            >
                <div className="col-4 p-3 text-center">
                    <img
                        src="media/images/yash.png"
                        style={{ borderRadius: "100%", width: "40%" }}
                    />
                    <h5 className="mt-2">Yash Bhoyar</h5>
                    <h6><a href="https://www.linkedin.com/in/yash-bhoyar-b8367b2b5/" style={{textDecoration:"none"}}> Software Engineer | FullStack Developer | Spring boot</a></h6>
                </div>
                
                <div className="col-4 p-3 text-center">
                    <img
                        src="media/images/mohit.jpeg"
                        style={{ borderRadius: "100%", width: "40%" }}
                    />
                    <h5 className="mt-2">Mohit Gabhane</h5>
                    <h6> <a href="https://www.linkedin.com/in/mohit-gabhane-045763324/" style={{textDecoration:"none"}}>Pursuing (TE), Computer Engineering </a> </h6>
                </div>

                <div className="col-4 p-3 text-center">
                    <img
                        src="media/images/vansh.jpeg"
                        style={{ borderRadius: "100%", width: "40%" }}
                    />
                    <h5 className="mt-2">Vansh Bhoyar</h5>
                    <h6><a href="https://www.linkedin.com/in/vansh-bhoyar-b898472b5/" style={{textDecoration:"none"}}>Software Engineer | FullStack Developer | Spring boot </a></h6>
                </div>
            </div>
        </div>
    );
}

export default Team;