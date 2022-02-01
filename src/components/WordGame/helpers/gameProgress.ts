const LOCAL_STORAGE_KEY_PROGRESS = "word-game-progress";
export const saveProgress = (data: object) => {
  if (!window.localStorage) return;
  window.localStorage.setItem(LOCAL_STORAGE_KEY_PROGRESS, JSON.stringify(data));
};

export const loadProgress = () => {
  if (!window.localStorage) return;
  const data = window.localStorage.getItem(LOCAL_STORAGE_KEY_PROGRESS);
  if (data) {
    return JSON.parse(data);
  }
};
