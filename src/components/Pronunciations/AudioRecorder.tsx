import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";

import Recorder from "components/Pronunciations/Recorder";
import RecorderIcon from "components/Pronunciations/RecorderIcon";

interface RecorderProps {
  wordId: string;
  recorder?: Recorder;
  uploadAudio?: (wordId: string, audioFile: File) => void;
}

export function getFileNameForWord(wordId: string): string {
  const fourCharParts = wordId.match(/.{1,6}/g);
  const compressed = fourCharParts?.map((i) =>
    Number("0x" + i).toString(36)
  ) ?? ["unknownWord"];
  return compressed.join("") + "_" + new Date().getTime().toString(36);
}

export default function AudioRecorder(props: RecorderProps): ReactElement {
  const { t } = useTranslation();
  const recorder = props.recorder ?? new Recorder();

  function startRecording(): void {
    recorder.startRecording();
  }

  function stopRecording(): void {
    recorder
      .stopRecording()
      .then(() => {
        const blob = recorder.getBlob();
        const fileName = getFileNameForWord(props.wordId);
        const file = new File([blob], fileName, {
          type: blob.type,
          lastModified: Date.now(),
        });
        if (props.uploadAudio) {
          props.uploadAudio(props.wordId, file);
        }
      })
      .catch((err) => {
        console.error(err);
        toast.error(t("pronunciations.noMicAccess"));
      });
  }

  return (
    <RecorderIcon
      wordId={props.wordId}
      startRecording={startRecording}
      stopRecording={stopRecording}
    />
  );
}
