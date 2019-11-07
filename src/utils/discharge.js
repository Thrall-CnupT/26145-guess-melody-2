function discharge(value) {
  if (!value) {
    return 0;
  }

  return String(value).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, `$1 `);
}

export default discharge;
