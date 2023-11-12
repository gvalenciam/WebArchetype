import { FC } from "react";

type ConstraintDict = { [key: string]: boolean };

enum BaseContainerClasses {
  MarginX = "mx",
  MarginY = "my",
  MarginRight = "mr",
  MarginLeft = "ml",
  MarginTop = "mt",
  MarginBottom = "mb",
  PaddingX = "px",
  PaddingY = "py",
  PaddingRight = "pr",
  PaddingLeft = "pl",
  PaddingTop = "pt",
  PaddingBottom = "pb",
}

interface BaseContainerProps extends React.ComponentPropsWithoutRef<"div"> {
  withPaddingX?: boolean;
  withPaddingY?: boolean;
  withPaddingLeft?: boolean;
  withPaddingRight?: boolean;
  withPaddingTop?: boolean;
  withPaddingBottom?: boolean;
  withMarginX?: boolean;
  withMarginY?: boolean;
  withMarginLeft?: boolean;
  withMarginRight?: boolean;
  withMarginTop?: boolean;
  withMarginBottom?: boolean;
}

const evaluateClasses = (props: BaseContainerProps): string => {
  var classesArray: string[] = [];
  if (typeof props.className === "string" && props.className !== "") {
    classesArray.push(props.className);
  }
  evaluateEdgesProps(
    { [BaseContainerClasses.MarginX]: props.withMarginX ?? false },
    {
      [BaseContainerClasses.MarginLeft]: props.withMarginLeft ?? false,
      [BaseContainerClasses.MarginRight]: props.withMarginRight ?? false,
    },
    classesArray
  );
  evaluateEdgesProps(
    { [BaseContainerClasses.MarginY]: props.withMarginY ?? false },
    {
      [BaseContainerClasses.MarginTop]: props.withMarginTop ?? false,
      [BaseContainerClasses.MarginBottom]: props.withMarginBottom ?? false,
    },
    classesArray
  );
  evaluateEdgesProps(
    { [BaseContainerClasses.PaddingX]: props.withPaddingX ?? false },
    {
      [BaseContainerClasses.PaddingLeft]: props.withPaddingLeft ?? false,
      [BaseContainerClasses.PaddingRight]: props.withPaddingRight ?? false,
    },
    classesArray
  );
  evaluateEdgesProps(
    { [BaseContainerClasses.PaddingY]: props.withPaddingY ?? false },
    {
      [BaseContainerClasses.PaddingTop]: props.withPaddingTop ?? false,
      [BaseContainerClasses.PaddingBottom]: props.withPaddingBottom ?? false,
    },
    classesArray
  );

  return classesArray.join(" ");
};

const evaluateEdgesProps = (
  axisDict: ConstraintDict,
  edgesDict: ConstraintDict,
  classesAray: string[]
) => {
  if (Object.keys(edgesDict).length > 0) {
    for (let edgeKey in edgesDict) {
      if (edgesDict[edgeKey]) {
        classesAray.push(edgeKey);
      }
    }
    for (let axisKey in axisDict) {
      if (axisDict[axisKey]) {
        classesAray.push(axisKey);
        for (let edgeKey in edgesDict) {
          if (classesAray.includes(edgeKey)) {
            removeStringFromArray(classesAray, edgeKey);
          }
        }
      }
    }
  }
};

const removeStringFromArray = (array: string[], string: string) => {
  let index = array.indexOf(string, 0);
  if (index > -1) {
    array.splice(index, 1);
  }
};

export const BaseContainer: FC<BaseContainerProps> = ({
  children,
  className,
  style,
  onClick,
  id,
  ...baseContainerProps
}) => {
  const classes = evaluateClasses(baseContainerProps);
  return (
    <div
      id={id}
      className={`${className} ${classes}`}
      style={style}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default BaseContainer;
