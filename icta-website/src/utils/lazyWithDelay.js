import React from "react";

let firstLoadDone = false;

export function lazyWithDelay(factory, delay = 10000) {
  return React.lazy(() => {
    if (firstLoadDone) {
      return factory();
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        factory().then((module) => {
          firstLoadDone = true;
          resolve(module);
        });
      }, delay);
    });
  });
}
