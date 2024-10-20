/*export enum COLOR {
  POMO_COLOR = "yellow-300",
  POMO_BORDER = "#FBBF24",
  //====================
  LONG_COLOR = "cyan-300",
  LONG_BORDER = "#06B6D4", //cyan-400",
  //=========================
  SHORT_COLOR = "green-300",
  SHORT_BORDER = "#4ADE80", //green-500 ",
}
*/
export enum COLOR {
  POMO_COLOR = "#FCD34D", // yellow-300
  POMO_BORDER = "#FBBF24", // #FBBF24
  //====================
  LONG_COLOR = "#06B6D4", // cyan-300
  LONG_BORDER = "#0EA5E9", // #06B6D4
  //=========================
  SHORT_COLOR = "#4ADE80", // green-300
  SHORT_BORDER = "#22C55E", // #4ADE80
}

export enum TimerModes {
  POMODORO = "Pomodoro",
  SHORT_BREAK = "Descanso corto",
  LONG_BREAK = "Descanso largo",
}




export interface HookPomodoroReturn {
  time: number;
  selectedMode: TimerModes;
  selectedColor: COLOR;
  selectedBorderColor: COLOR;
  setSelectedMode: (mode: TimerModes) => void;
  setIsRunning: (isRunning: boolean) => void;
  isRunning: boolean;
  isPressed: string;
  setIsPressed: (isPressed: string | null) => void;
  handleReset: () => void;
  handleChangeButton: () => void;
  formatTime: () => string;
}