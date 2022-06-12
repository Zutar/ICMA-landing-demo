import React from "react";
import styles from "./PrimaryButton.module.css";

function PrimaryButton(props) {
    const {
        onclick,
        text,
        type,
        style={}
    } = props;
    return (
        <button className={[`${styles['primary-button']} ${type ? styles[type] : null}`]} onClick={onclick} style={style}>
            {text}
        </button>
    );
}

export default PrimaryButton;
