  const ToEnglishDigits = (str: string) => {
    return str.replace(/[۰-۹]/g, (d) => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
  }

  export default ToEnglishDigits;