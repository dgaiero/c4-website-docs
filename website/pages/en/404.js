/**
 * Copyright (c) 2020-Present Central Coast Climate Collaborative
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class NotFound extends React.Component {
  render() {
     const { config: siteConfig, language = '' } = this.props;
     const { baseUrl } = siteConfig;
     const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;
    return (
      <>
          <code>Resource Not Found</code>
      </>
    );
  }
}

module.exports = NotFound;
