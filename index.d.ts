declare module "react-countdown-clock" {
  import React from "react";

  interface CountdownClockProps {
    /**
     * Weight of the circle, in pixels
     */
    weight?: number;
    /**
     * Seconds to countdown, defaults to `60`
     */
    seconds?: number;
    /**
     * Diameter of the countdown time, in pixels. Defaults to `300`
     */
    size?: number;
    /**
     * Color of counter, defaults to `#000`
     */
    color?: string;
    /**
     * Alpha transparency of counter, defaults to `1.0`
     */
    alpha?: number;
    /**
     * Font size in pixels, or `auto` for dynamic sizing. Defaults to `auto`.
     */
    fontSize?: number | string;
    /**
     * Font of the counter, defaults to `Arial`
     */
    font?: string;
    /**
     * Format of remaining time, either in raw seconds or with hours and minutes. Defaults to `seconds`
     */
    timeFormat?: "seconds" | "hms";
    /**
     * Whether milliseconds should be shown when under 10 seconds remaining, defaults to `true`
     */
    showMilliseconds?: boolean;
    /**
     * Callback function to invoke when countdown is complete.
     */
    onComplete?: () => void;
    /**
     * Set this to pause the time temporarily, defaults to `false`
     */
    paused?: boolean;
    /**
     * Text to display when paused, defaults to the current time on the countdown.
     */
    pausedText?: string;
  }

  export default class ReactCountdownClock extends React.Component<
    CountdownClockProps
  > {}
}
