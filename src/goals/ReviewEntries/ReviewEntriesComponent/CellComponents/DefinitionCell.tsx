import { Input } from "@mui/material";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

import { Definition } from "api/models";
import { FieldParameterStandard } from "goals/ReviewEntries/ReviewEntriesComponent/CellColumns";
import AlignedList, {
  SPACER,
} from "goals/ReviewEntries/ReviewEntriesComponent/CellComponents/AlignedList";
import { ReviewEntriesSense } from "goals/ReviewEntries/ReviewEntriesComponent/ReviewEntriesTypes";
import { StoreState } from "types";
import { themeColors } from "types/theme";
import { newDefinition } from "types/word";
import { TextFieldWithFont } from "utilities/fontComponents";

interface DefinitionCellProps extends FieldParameterStandard {
  editable?: boolean;
  sortingByThis?: boolean;
}

export default function DefinitionCell(
  props: DefinitionCellProps
): ReactElement {
  const analysisLang = useSelector(
    (state: StoreState) =>
      state.currentProjectState.project.analysisWritingSystems[0].bcp47
  );
  const { t } = useTranslation();

  return (
    <AlignedList
      listId={`senses${props.rowData.id}`}
      contents={props.rowData.senses.map((sense, index) =>
        props.editable ? (
          <DefinitionList
            definitions={sense.definitions}
            defaultLang={analysisLang}
            keyPrefix={`row-${props.rowData.id}-definition`}
            key={`row-${props.rowData.id}-definition`}
            onChange={(definitions) =>
              props.onRowDataChange &&
              props.onRowDataChange({
                ...props.rowData,
                senses: [
                  ...props.rowData.senses.slice(0, index),
                  {
                    ...sense,
                    definitions,
                  },
                  ...props.rowData.senses.slice(index + 1),
                ],
              })
            }
          />
        ) : (
          <Input
            fullWidth
            key={`definitions${props.rowData.id}`}
            value={ReviewEntriesSense.definitionString(props.value[index])}
            placeholder={t("reviewEntries.noDefinition")}
            disabled={sense.deleted}
            readOnly
            disableUnderline
            multiline
            style={
              props.sortingByThis && index === 0
                ? { backgroundColor: themeColors.highlight }
                : {}
            }
          />
        )
      )}
      bottomCell={props.editable ? SPACER : undefined}
    />
  );
}

interface DefinitionListProps {
  definitions: Definition[];
  defaultLang: string;
  keyPrefix: string;
  onChange: (definitions: Definition[]) => void;
}

function DefinitionList(props: DefinitionListProps): ReactElement {
  const langs = props.definitions.map((g) => g.language);
  const definitions = langs.includes(props.defaultLang)
    ? props.definitions
    : [...props.definitions, newDefinition("", props.defaultLang)];

  return (
    <>
      {definitions.map((g, i) => (
        <DefinitionField
          definition={g}
          key={`${props.keyPrefix}-${i}`}
          textFieldId={`${props.keyPrefix}-${i}-text`}
          onChange={(definition: Definition) => {
            const updatedDefinitions = [...definitions];
            updatedDefinitions.splice(i, 1, definition);
            props.onChange(updatedDefinitions);
          }}
        />
      ))}
    </>
  );
}

interface DefinitionFieldProps {
  definition: Definition;
  textFieldId: string;
  onChange: (definition: Definition) => void;
}

function DefinitionField(props: DefinitionFieldProps): ReactElement {
  return (
    <TextFieldWithFont
      id={props.textFieldId}
      label={`${props.definition.language}:`}
      lang={props.definition.language}
      variant="outlined"
      margin="dense"
      multiline
      value={props.definition.text}
      error={props.definition.text.length === 0}
      onChange={(event) =>
        props.onChange({
          language: props.definition.language,
          text: event.target.value,
        })
      }
    />
  );
}
