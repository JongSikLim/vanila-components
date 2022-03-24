const LazyLoading = ($element, config) => {
  const ioOption = {
    threshold: [0, 0.25, 0.5, 0.75, 1], // 어느정도 비율에 걸쳤을 때, 콜백함수 호출할건지
  };
  const io = new IntersectionObserver((entries, observe) => {
    entries.forEach((entry) => {
      //#region 스크롤안에 나오면 바로 활성화
      // if (entry.isIntersecting) {
      //   entry.target.src = entry.target.dataset.src;
      //   observe;
      // } else {
      //   entry.target.src = undefined;
      // }
      // #endregion

      //#region 정한  비율에 맞게 활성화
      if (entry.intersectionRatio >= 0.2) {
        entry.target.src = entry.target.dataset.src;
        observe.disconnect();
      } else {
        // entry.target.src = undefined;
      }
      //#endregion
    });
  }, ioOption);

  if ($element) {
    io.observe($element);
  }
};

export default LazyLoading;
