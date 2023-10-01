const template = ({ componentName, jsx }, { tpl }) => {
    return tpl`
type Props = {
  color?: string;
  width?: string;
  height?: string;
}

const ${componentName.substring(
        3
    )} = ({ color = "currentColor", width="25px", height }: Props) => {
  return ${jsx}
}

export default ${componentName.substring(3)}`;
};

module.exports = template;
