import React, { useState, useEffect } from "react";

function CardButton(props) {
  const { buttonTextColor, buttonText } = props;
  return <button style={{ color: buttonTextColor }}>{buttonText}</button>;
}

export { CardButton };
