import { useEffect } from "react";

function GoogleTranslate() {
  useEffect(() => {
    const addScript = () => {
      const script = document.createElement("script");
      script.src =
        "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          { pageLanguage: "en" },
          "google_translate_element"
        );
      };
    };

    if (!window.google?.translate) {
      addScript();
    } else {
      window.googleTranslateElementInit();
    }
  }, []);

  return <div id="google_translate_element" />;
}

export default GoogleTranslate;
