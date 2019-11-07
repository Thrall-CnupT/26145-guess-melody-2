import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {pluralizeTemplate} from 'utils/pluralize';

class App extends PureComponent {
  render() {
    const {mistakes, time} = this.props;

    return (
      <div>
        <p>
          {`За `}
          {pluralizeTemplate(time, ` минуту `, ` минуты `, ` минут `)}
          {`нужно ответить на все вопросы. Можно допустить `}
          {pluralizeTemplate(mistakes, ` ошибку `, ` ошибки `, ` ошибок `)}
        </p>
      </div>
    );
  }
}

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  time: PropTypes.number.isRequired,
};

App.defaultProps = {
  mistakes: 1,
  time: 7,
};

export default App;
