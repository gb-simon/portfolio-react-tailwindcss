import React, { Component } from "react";
import "../App.css";

class Articles extends Component {
  render() {
    return (
      <div>
        <div className="hero container max-w-screen-lg mx-auto pb-10">
          <h1 className="mt-16">My Blog</h1>
          <a href="https://gonzalosimon.hashnode.dev">I have a blog</a> where I
          like writing articles <br />
          about my projects and how I think my challenges .{" "}
        </div>
        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {/* <!-- 1 Article --> */}

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/portfolio-websites">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611512746691/HyhkHLk7T.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">Portfolio Website</h1>
                </header>
              </section>
            </div>
            {/* <!-- 8 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/how-i-got-started-coding">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1610313255132/s8M61xLX6.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">
                    How I got Started Coding
                  </h1>
                </header>
              </article>
            </div>

            {/* <!-- 7 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/to-do-app-with-react-and-redux-job-interview-challenge-1">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1609844786265/BBTtjYVl0.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">
                    Job Interview Challenge
                  </h1>
                </header>
              </section>
            </div>

            {/* <!-- 6 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/wikipedia-viewer-with-react">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1609996942139/QVAjdTfKS.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">
                    Wikipedia Viewer with React
                  </h1>
                </header>
              </section>
            </div>

            {/* <!-- 5 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/javascript-algorithm-challenge-job-interview-challenge">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1610242414753/UxG8q0GO_.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">
                    Job Interview Challenge
                  </h1>
                </header>
              </section>
            </div>

            {/* <!-- 4 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/five-projects-with-javascript">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1610762829970/f1MLLtcdO.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">
                    Five Projects With JavaScript
                  </h1>
                </header>
              </section>
            </div>

            {/* <!-- 3 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/five-useful-github-repositories">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1610850904652/7J7nVvu8I.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">
                    Five Useful GitHub Repositories
                  </h1>
                </header>
              </section>
            </div>

            {/* <!-- 2 Article --> */}
            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <section className="overflow-hidden rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/useful-info-about-freelancing">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1611416734784/kjzINnstw.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />
                </a>
                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                  <h1 className="text-black text-lg">About Freelancing</h1>
                </header>
              </section>
            </div>
            {/* <!-- 1 Article --> */}

            <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
              <article className="rounded-lg shadow-lg">
                <a href="https://gonzalosimon.hashnode.dev/football-game-with-javascript-part-1">
                  <img
                    alt="Placeholder"
                    className="h-auto w-full"
                    src="https://cdn.hashnode.com/res/hashnode/image/upload/v1608717215089/6CdPYbAHq.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress"
                  />

                  <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-black text-lg">
                      Football Game - JavaScript
                    </h1>
                  </header>
                </a>
              </article>
            </div>
            {/* End */}
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
