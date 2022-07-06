import classnames, { Binding } from "classnames/bind";

type GlobalStyles = string | undefined;
type LocalStyles = string[] | {} | string;

class ClassNames {
  private readonly bindClassNames: Function;

  constructor(styleModule: Binding) {
    this.bindClassNames = classnames.bind(styleModule);
  }

  private _createLocalClassNames(localStyles: LocalStyles) {
    return this.bindClassNames(localStyles);
  }

  private _createGlobalClassNames(globalStyles: GlobalStyles) {
    return globalStyles ? " " + globalStyles : "";
  }

  cx(localStyles: LocalStyles, globalStyles?: GlobalStyles) {
    return (
      this._createLocalClassNames(localStyles) +
      this._createGlobalClassNames(globalStyles)
    );
  }
}

export default ClassNames;
