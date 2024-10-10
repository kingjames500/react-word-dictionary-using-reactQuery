import { create } from "zustand";

const wordParamStore = function (set) {
  return {
    word: "",

    setWord: function (newWord) {
      if (newWord === "") return;
      if (newWord.trim() === "") return;

      set(function (state) {
        return { word: newWord };
      });
    },
  };
};

const useWordParamStore = create(wordParamStore);

export default useWordParamStore;
