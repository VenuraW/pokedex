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

  return (
    <S.TypeSelectorGrid container>
      <S.TypeGridItem item>
        <S.TypeChip
          selected={"all" in selectedTypes}
          type={"none"}
          label="all"
          variant="outlined"
          onClick={(e) =>
            setTypes(e.target.innerText)
          }
        />
      </S.TypeGridItem>
      {availableTypes.map((type, index) => {
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
      })}
    </S.TypeSelectorGrid>
  );
};
