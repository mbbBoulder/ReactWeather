var React = require('react');

// only have render method so:
var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather app.
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - The JavaScript framework used.
        </li>
      </ul>
    </div>
  )
};

module.exports = About;
