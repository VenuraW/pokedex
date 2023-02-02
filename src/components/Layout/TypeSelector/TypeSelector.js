import React from "react";
import * as S from "./TypeSelector.styles";

export const TypeSelector = ({
  availableTypes,
  selectedTypes,
  setSelectedTypes,
}) => {
  const setTypes = async (type) => {
    let types = selectedTypes;
    type in types
      ? delete types[type]
      : (types[type] = 1);

    await setSelectedTypes(() => ({
      ...types,
    }));
  };

  const resetTypes = async () => {
    await setSelectedTypes(availableTypes);
  };

  return (
    <S.TypeSelectorGrid container>
      {Object.keys(availableTypes).map(
        (type, index) => {
          return (
            <S.TypeGridItem key={index} item>
              <S.TypeChip
                selected={type in selectedTypes}
                type={type}
                label={type}
                variant="outlined"
                onClick={(e) =>
                  setTypes(e.target.innerText)
                }
              />
            </S.TypeGridItem>
          );
        }
      )}
    </S.TypeSelectorGrid>
  );
};
