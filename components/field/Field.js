import PropTypes from 'prop-types';

import css from './Field.css';

export default function Field(props) {

  const{title, type} = props;

  return (
    <React.Fragment>
      <div className={css.field}>
      <p className = {css.field__label}>{title}</p>
      <input className={css.field__input} type={type}/>
      </div>
    </React.Fragment>
  );
}

Field.propTypes = {

}

Field.defaultProps = {

}
