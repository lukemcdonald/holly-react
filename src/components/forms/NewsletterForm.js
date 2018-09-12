import React, { Component } from 'react';
import classnames from 'classnames';

class NewsletterForm extends Component {
  state = {
    email: '',
  }

  render() {
    const { className, submit = 'Submit' } = this.props;
    const classNames = classnames(
      'newsletter-form field field-grouped is-revealing',
      className
    )

    return (
      <form className={classNames}>
        <div className="control control-expanded">
          <input className="input" type="email" name="email" placeholder="Your best email&hellip;" />
        </div>
        <div className="control">
          <button className="button button-primary button-block button-shadow" type="submit">{submit}</button>
        </div>
      </form>
    )
  }
}

export default NewsletterForm;
