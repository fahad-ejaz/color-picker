import React, { Component } from "react";
import styles from "./styles/ColorBoxStyles.js";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
const generateClassName = createGenerateClassName({
  seed: 'anyprefix',
});


class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }
  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      moreUrl,
      showingFullPalette,
      classes
    } = this.props;

    const { copied } = this.state;
    return (
      // <div style={{height: "100%"}}>
      /* <StylesProvider generateClassName={generateClassName}> */
      <CopyToClipboard onCopy={this.changeCopyState} className={classes.ColorBox}>
        <div style={{ background }}>
          <div
            style={{ background }}
            className={classNames(classes.copyOverlay, {
              [classes.showOverlay]: copied
            })}
          />

          <div
            className={classNames(classes.copyMessage, {
              [classes.showMessage]: copied
            })}
          >
            <h1>copied!</h1>
            <p className={classes.copyText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
              <span className={classes.colorName}>{name}</span>
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {showingFullPalette && (
            <Link to={moreUrl} onClick={e => e.stopPropagation()}>
              <span className={classes.seeMore}>MORE</span>
            </Link>
          )}
        </div>
      </CopyToClipboard >
      /* </StylesProvider> */
      // </div>
    );
  }
}
export default withStyles(styles)(ColorBox);
